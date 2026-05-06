import { Injectable } from '@nestjs/common';
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

  async saveFile(file: any, user: any) {
    const fileName = `${Date.now()}-${file.originalname}`;

    const { error } = await supabase.storage
      .from('files')
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) throw new Error(error.message);

    const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/files/${fileName}`;

    const newFile = this.fileRepo.create({
      filename: file.originalname,
      path: publicUrl,
      mimetype: file.mimetype,
      type: 'certificado',
      user: user,
    });

    return await this.fileRepo.save(newFile);
  }

  async getUserFiles(userId: number) {
    return this.fileRepo.find({
      where: { user: { id: userId } },
    });
  }

  async deleteFile(id: number, userId: number) {
    const file = await this.fileRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!file) {
      throw new Error('Archivo no encontrado');
    }

    try {
      const fileName = file.path.split('/').pop();
      if (!fileName) {
        throw new Error('No se pudo obtener el nombre del archivo');
      }

      const { error } = await supabase.storage.from('files').remove([fileName]);

      if (error) {
        console.log('Error eliminando de supabase:', error.message);
        throw new Error(error.message);
      }

      await this.fileRepo.remove(file);

      return { message: 'Archivo eliminado correctamente' };
    } catch (error) {
      console.log('💥 ERROR DELETE:', error);
      throw error;
    }
  }
}
