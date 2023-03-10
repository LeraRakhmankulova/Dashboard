import {Controller, Post, UseGuards, Request, Get, Body} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";
import {CreateUserDto} from "../user/dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService) {
    }

    @Post('register')
    create(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto);
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user;
    }
}
