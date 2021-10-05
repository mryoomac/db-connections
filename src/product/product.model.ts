import { Prop, SchemaFactory} from '@nestjs/mongoose'
import { Document, ObjectId, Schema } from 'mongoose';

export type ProductDocument = Product & Document;


export class Product extends Document{
  @Prop()
    title: string;

  @Prop()
    image: string;

  @Prop()
    category: string;
}

export const ProductSchema = new Schema(Product);