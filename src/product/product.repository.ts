import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './create-product.dto';
import { Product } from './product.model';

export class ProductRepository {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async saveProduct(obj: CreateProductDto): Promise<Product> {
    return new this.productModel(obj).save();
  }

  async findById(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async find(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async deleteOne(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id);
  }
}
