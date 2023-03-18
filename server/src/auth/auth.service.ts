import {BadRequestException, Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {UserEntity} from "../user/entities/user.entity";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {compare, genSalt, hash} from "bcrypt";
import {comparePasswords} from "./strategies/bcrypt";
import {InvalidClassException} from "@nestjs/core/errors/exceptions/invalid-class.exception";

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
                private jwtService: JwtService) {
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOneByEmail(email);
        const isMatch = comparePasswords(password, user.password)
        if (user) {
            const {password, ...result} = user;
            if (isMatch)
                return result;
            throw new BadRequestException("Password mismatch")
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
