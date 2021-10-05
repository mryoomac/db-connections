import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./product.model";

export class ProductRepository{


    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async save(obj){
        const product = new this.productModel(obj);
        return product.save();
    }

    async findById(id: string): Promise<Product> {
      throw new Error('Method not implemented.');
    }

    find() {
      throw new Error('Method not implemented.');
    }
    deleteOne(setId: any) {
      throw new Error('Method not implemented.');
    }


}

