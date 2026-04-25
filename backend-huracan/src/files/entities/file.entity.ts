import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class FileEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  filename!: string;

  @Column()
  path!: string;

  @Column()
  mimetype!: string;

  @ManyToOne(() => User, (user) => user.files, { onDelete: 'CASCADE' })
  user!: User;
}
