import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { supabase } from '../config/supabase';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepo: Repository<FileEntity>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async saveFile(file: any, user: User) {
    const fileName = `${Date.now()}-${file.originalname}`;

    const { error } = await supabase.storage
      .from('files')
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) {
      throw new Error(error.message);
    }

    const newFile = this.fileRepo.create({
      filename: file.originalname,
      path: fileName,
      mimetype: file.mimetype,
      type: 'certificado',
      user,
    });

    return this.fileRepo.save(newFile);
  }

  async getSignedUrl(path: string) {
    const { data, error } = await supabase.storage
      .from('files')
      .createSignedUrl(path, 60 * 10);

    if (error) {
      throw new Error(error.message);
    }

    return data.signedUrl;
  }

  async getUserFiles(userId: string) {
    const files = await this.fileRepo.find({
      where: {
        user: {
          id: userId,
        },
      },
    });

    const filesWithUrls = await Promise.all(
      files.map(async (file) => {
        const signedUrl = await this.getSignedUrl(file.path);

        return {
          ...file,
          signedUrl,
        };
      }),
    );

    return filesWithUrls;
  }

  async deleteFile(id: string, userId: string) {
    const file = await this.fileRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!file) {
      throw new NotFoundException('Archivo no encontrado');
    }

    const isOwner = file.user.id === userId;
    const isAdmin = file.user.role === 'admin';

    if (!isOwner && !isAdmin) {
      throw new ForbiddenException('No autorizado');
    }

    const { error } = await supabase.storage.from('files').remove([file.path]);

    if (error) {
      throw new Error(error.message);
    }

    await this.fileRepo.remove(file);

    return {
      message: 'Archivo eliminado correctamente',
    };
  }
}
