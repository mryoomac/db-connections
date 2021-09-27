import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from "./product.model";
import { Model, Mongoose, Schema, connect} from "mongoose";
import { response } from 'express';



@Injectable()
export class ProductService {


    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>
    ) {
        
    }

    async getAll() {
        return this.productModel.find().exec();
    }

    async getById(id: string) {
        return this.productModel.findById(id);
    }

    async create(setTitle: string, setImage: string, setCategory: string){
        const b = await this.productModel.create([{title:setTitle, image:setImage, category:setCategory}]);
        console.log(b);
    }

    async deleteById(setId){
        await this.productModel.deleteOne(setId);
    }




}

