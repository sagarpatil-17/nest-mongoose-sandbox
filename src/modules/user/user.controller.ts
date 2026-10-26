import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    async createUser() {
        return this.userService.createUser();
    }

    @Get('all')
    async findAllUsers() {
        return this.userService.findAllUsers();
    }
}
