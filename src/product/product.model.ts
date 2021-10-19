import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  title: string;
  @Prop()
  image: string;
  @Prop()
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
