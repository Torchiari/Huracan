import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../common/enums/role.enum';
import { OneToMany } from 'typeorm';
import { FileEntity } from '../../files/entities/file.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @Column()
  password!: string;

  @Column({ default: Role.USER })
  role!: Role;

  @OneToMany(() => FileEntity, (file) => file.user)
  files!: FileEntity[];
}
