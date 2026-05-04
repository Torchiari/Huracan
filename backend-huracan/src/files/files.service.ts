import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepo: Repository<FileEntity>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async saveFile(file: any, userPayload: any) {
    try {
      console.log('📦 FILE EN SERVICE:', file);

      const user = await this.userRepo.findOne({
        where: { id: userPayload.sub },
      });

      if (!user) {
        console.log('❌ USER NO ENCONTRADO');
        throw new Error('Usuario no encontrado');
      }

      const newFile = this.fileRepo.create({
        filename: file.originalname || file.filename,
        path: file.path || file.url,
        mimetype: file.mimetype,
        user: user,
      });

      console.log('📝 GUARDANDO:', newFile);

      const saved = await this.fileRepo.save(newFile);

      console.log('✅ GUARDADO OK');

      return saved;
    } catch (error) {
      console.log('💥 ERROR EN saveFile:', error);
      throw error;
    }
  }

  async getUserFiles(userId: number) {
    return this.fileRepo.find({
      where: { user: { id: userId } },
    });
  }

  async deleteFile(id: number, userId: number) {
    const file = await this.fileRepo.findOne({
      where: { id, user: { id: userId } },
    });

    if (!file) {
      throw new Error('Archivo no encontrado');
    }

    return this.fileRepo.remove(file);
  }
}
