import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import { Role } from '../common/enums/role.enum';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    private filesService: FilesService,
  ) {}

  findAll() {
    return this.userRepo.find({
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: string) {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['files'],
    });

    if (!user) return null;

    const filesWithUrls = await Promise.all(
      user.files.map(async (file) => {
        const signedUrl = await this.filesService.getSignedUrl(file.path);

        return {
          ...file,
          signedUrl,
        };
      }),
    );

    return {
      ...user,
      files: filesWithUrls,
    };
  }

  async update(id: string, data: any) {
    await this.userRepo.update(id, data);

    return this.findOne(id);
  }

  async updateRole(id: string, role: Role) {
    await this.userRepo.update(id, { role });

    return this.findOne(id);
  }
}
