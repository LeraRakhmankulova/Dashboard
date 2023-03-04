import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {UserEntity} from "../user/entities/user.entity";
import {CreateUserDto} from "../user/dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService) {
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOneByEmail(email);
        if (user && user.password === password) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: UserEntity) {
        const payload = {email: user.email, sub: user.id};
        const found = this.userService.findOneByEmail(user.email)
        const {password, ...res} = user
        return {
            ...res,
            token: this.jwtService.sign(payload),
        };
    }

    async register(dto: CreateUserDto) {
        const found = await this.userService.create(dto);
        const {password, ...user} = found
        return {
            ...user,
            token: this.jwtService.sign(found),
        };
    }
}
