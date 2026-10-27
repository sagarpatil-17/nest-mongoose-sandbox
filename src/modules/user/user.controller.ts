import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { Throttle } from '@nestjs/throttler';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    async createUser() {
        return this.userService.createUser();
    }

    @Throttle({ default: { limit: 3, ttl: 30000 } })
    @Get('all')
    async findAllUsers() {
        return this.userService.findAllUsers();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async getProfile(@Request() req: Request & { user: any }) {
        return req['user'];
    }
}
