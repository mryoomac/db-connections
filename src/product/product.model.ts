import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document, ObjectId } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    title: string;

    @Prop()
    image: string;

    @Prop()
    category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);