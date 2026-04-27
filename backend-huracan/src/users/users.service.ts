import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User>) {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  async findByDni(dni: string) {
    return this.usersRepository.findOne({
      where: { dni },
    });
  }

  async findByPhone(phone: string) {
    return this.usersRepository.findOne({
      where: { phone },
    });
  }

  async findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }
}
