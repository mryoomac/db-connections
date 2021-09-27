import { Injectable } from '@nestjs/common';
import { Schema } from 'mongoose';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'The program is currently working!';
}

}
