import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
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

    async getById(setId: string){
      return this.productService.getById(setId);
    }

    /// createProductDto - setTitle: string, setImage: string, setCategory: string
  @Post()
    async addNewProduct(setTitle: string, setImage: string, setCategory: string){
      await this.productService.create(setTitle, setImage, setCategory);
    }

  @Delete()
    async deleteById(setId: string){
      return this.productService.deleteById(setId);
    }
}