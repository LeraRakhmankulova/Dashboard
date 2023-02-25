import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {AuthDto} from "./dto/auth.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(dto: AuthDto): Promise<any> {
        const user = await this.userService.findOneByDto(dto);
        if (user) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
