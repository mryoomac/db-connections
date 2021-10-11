import { Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {
  }

@Get()
async getAll(){ 
  return this.productService.getAll();
  }

@Get()
async getById(id: string): Promise<Product>{
  return this.productService.getById(id);
  }

@Post()
async addNewProduct(dto : CreateProductDto): Promise<Product>{
  return this.productService.create(dto);
  }

@Delete()
async deleteById(id: string): Promise<Product>{
  return this.productService.deleteById(id);
  }
}