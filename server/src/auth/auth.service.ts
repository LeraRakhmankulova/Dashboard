import {Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {UserEntity} from "../user/entities/user.entity";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {compare, genSalt, hash} from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService) {
    }

    async validateUser(email: string, password: string): Promise<any> {
        const salt = await genSalt(10);
        const user = await this.userService.findOneByEmail(email);
        const hashPass = await hash(password, salt);
        const isMatch = await compare(password, hashPass);
        if (user && isMatch) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: UserEntity) {
        const {password, ...userData} = user
        return {
            ...userData,
            token: this.jwtService.sign(userData),
        };
    }

    async register(dto: CreateUserDto) {
        const user = await this.userService.create(dto);
        const {password, ...userData} = user
        return {
            ...user,
            token: this.jwtService.sign(userData),
        };
    }
}
