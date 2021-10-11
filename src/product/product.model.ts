import { Prop } from '@nestjs/mongoose'
import { Document, Schema } from 'mongoose';

export type ProductDocument = Product & Document;

export class Product extends Document{
  @Prop()
    id: string;

  @Prop()
    title: string;

  @Prop()
    image: string;

  @Prop()
    category: string;
}

export const ProductSchema = new Schema(Product);