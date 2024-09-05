import { Cat } from 'src/cats/entities/cat.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
  @Column({ primary: true, generated: true })
  
  @ApiProperty()
  id: number;

  @Column({ length: 500 })
  @ApiProperty()
  name: string;

  @Column({ length: 500 })
  @ApiProperty()
  BarCode: string;

  
  @ApiProperty()
  price: number;


 
}
