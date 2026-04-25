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

  async saveFile(file: Express.Multer.File, userPayload: any) {
    const user = await this.userRepo.findOne({
      where: { id: userPayload.sub },
    });

    const newFile = this.fileRepo.create({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
      user: user!,
    });

    return this.fileRepo.save(newFile);
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
