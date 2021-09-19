import { Injectable } from '@nestjs/common';
import { ProductService } from './product/product.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'The program is currently working!'; 
    
  }

  
}
