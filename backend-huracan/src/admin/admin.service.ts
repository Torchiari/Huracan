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
      order: { id: 'DESC' },
    });
  }

  findOne(id: number) {
    return this.userRepo.findOne({
      where: { id },
      relations: ['files'],
    });
  }

  async update(id: number, data: any) {
    await this.userRepo.update(id, data);
    return this.findOne(id);
  }

  async updateRole(id: number, role: Role) {
    await this.userRepo.update(id, { role });
    return this.findOne(id);
  }
}
