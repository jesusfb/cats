import { Cat } from 'src/cats/entities/cat.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Breed {
  @Column({ primary: true, generated: true })
  @ApiProperty()
  id: number;

  @Column({ length: 500 })
  @ApiProperty()
  name: string;

  @OneToMany(() => Cat, (cat) => cat.breed)
  @ApiProperty()
  cats: Cat[];
}
