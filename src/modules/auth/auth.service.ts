import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/schemas/user.schema';

@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService) { }

    async signup(email: string, password: string) {
        const hash = await bcrypt.hash(password, 10);
        const user = new this.userModel({
            email, password: hash
        })
        return user.save();
    }

    async login(email: string, password: string) {
        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new NotFoundException('User not found!')
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException('password mismatch!')
        }

        const payload = { email: user.email, sub: user._id };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
