import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {AuthDto} from "./dto/auth.dto";
import {CreateUserDto} from "../user/dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(dto: CreateUserDto): Promise<any> {
        const user = await this.userService.findOneByDto(dto);
        if (user && user.password === dto.password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
