import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/authorization/auth.guard';
import { CreateProductDto } from './create-product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/getall')
  async getAll() {
    return this.productService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get('/getbyid')
  async getById(@Body() id: string): Promise<Product> {
    return this.productService.getById(id);
  }

  @Post()
  async addNewProduct(@Body() dto: CreateProductDto): Promise<Product> {
    console.log(dto);
    return this.productService.create(dto);
  }

  @Delete('/delete')
  async deleteById(@Body() id: string): Promise<Product> {
    return this.productService.deleteById(id);
  }
}
