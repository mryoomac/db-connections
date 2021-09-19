import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {
    }



    @Get()
    async all(){ 
        return this.productService.all();
    }

    async collectionShow(){
        
    }


  
}
