import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from '../common/enums/role.enum';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  findAll() {
    return this.userRepo.find({
      order: { created_at: 'DESC' },
    });
  }

  findOne(id: string) {
    return this.userRepo.findOne({
      where: { id },
      relations: ['files'],
    });
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
