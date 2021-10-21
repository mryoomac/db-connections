import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductService {
  constructor(private repository: ProductRepository) {}

  async getAll(): Promise<Product[]> {
    return this.repository.find();
  }

  async getById(id: string): Promise<Product> {
    return this.repository.findById(id);
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const b = await this.repository.saveProduct(dto);
    return b;
  }

  async deleteById(id: string): Promise<Product> {
    return this.repository.deleteOne(id);
  }
}
