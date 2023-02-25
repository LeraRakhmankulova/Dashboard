import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../user/dto/create-user.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(dto: CreateUserDto): Promise<any> {
        const user = await this.authService.validateUser(dto);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}