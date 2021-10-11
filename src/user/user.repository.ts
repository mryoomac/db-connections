import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";

export class UserRepository{

  constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async save(Object: object){
      const user = new this.userModel(Object);
      await user.save();
      return (Object);
       
    }
}
