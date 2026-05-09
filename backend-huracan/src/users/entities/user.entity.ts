import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

import { Role } from '../../common/enums/role.enum';
import { FileEntity } from '../../files/entities/file.entity';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column({ unique: true })
  dni!: string;

  @Column()
  phone!: string;

  @Column({ unique: true })
  email!: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role!: Role;

  @CreateDateColumn()
  created_at!: Date;

  @OneToMany(() => FileEntity, (file) => file.user)
  files!: FileEntity[];
}
