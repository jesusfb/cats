import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../common/enums/rol.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()

  @ApiProperty()  
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column({ unique: true, nullable: false })
  @ApiProperty()
  email: string;

  @Column({ nullable: false, select: false })
  @ApiProperty()
  password: string;

  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: Role;

  @DeleteDateColumn()
  deletedAt: Date;
}
