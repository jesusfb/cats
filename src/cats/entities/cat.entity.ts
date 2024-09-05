import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Breed } from '../../breeds/entities/breed.entity';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Cat {
  // @PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  age: number;

  @DeleteDateColumn()
  @ApiProperty()
  deletedAt: Date;

  @ManyToOne(() => Breed, (breed) => breed.id, {
    eager: true, // para que traiga las raza al hacer un findOne
  })
  breed: Breed;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email',  })
  user: User;

  @Column()
  userEmail: string;

}
