// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './entities/user.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(User)
//     private repo: Repository<User>,
//   ) {}

//   findByEmail(email: string) {
//     return this.repo.findOne({ where: { email } });
//   }

//   create(userData: Partial<User>) {
//     const user = this.repo.create(userData);
//     return this.repo.save(user);
//   }

//   findAll() {
//     return this.repo.find();
//   }
// }
