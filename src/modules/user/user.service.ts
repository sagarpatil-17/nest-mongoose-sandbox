import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) { }

    async createUser(): Promise<User> {
        const user = new this.userModel({
            name: 'Sagar Patil',
            address: {
                street: '123 Street',
                city: 'Mumbai'
            }
        })
        return await user.save();
    }

    async findAllUsers(): Promise<User[]> {
        return await this.userModel.find();
    }
}
