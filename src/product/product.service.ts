import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from "./product.model";
import { Model, Mongoose, Schema, connect} from "mongoose";
import { response } from 'express';
import { ProductRepository } from './product.repository';



@Injectable()
export class ProductService {

  constructor(
    private repository: ProductRepository
    ) {   
    }

  async getAll(){
    return this.repository.find();
  }

  async getById(id: string):Promise<Product> {
    return this.repository.findById(id);
  }

  async create(setTitle: string, setImage: string, setCategory: string){
    const b = await this.repository.save({title:setTitle, image:setImage, category:setCategory});
      console.log(b);
  }
///:Promise<Product> Void Any
  async deleteById(setId) {
    await this.repository.deleteOne(setId);
  }

}

