import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly  productRepository: Repository<Product>,
  ) {}

  create(createUserDto: CreateProductDto) {
    return this.productRepository.save(createUserDto);
  }

  
  findAll() {
    return this.productRepository.find();
  }

}
