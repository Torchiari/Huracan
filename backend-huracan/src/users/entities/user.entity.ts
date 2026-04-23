import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../common/enums/role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: Role.USER })
  role!: Role;
}
