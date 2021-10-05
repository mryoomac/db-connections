import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";

export class UserRepository{


  constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    save(Object: object){
      const user = new this.userModel(Object);
        user.save();
        return (Object);
        
    }

}
