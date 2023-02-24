import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {AuthDto} from "./dto/auth.dto";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {
    }

    async validateUser(dto: AuthDto) {
        const users = await this.userService.findAll()
        const {password, ...user} = users.find((el) => el.email === dto.email)
        
        if (!user) throw new UnauthorizedException('Not found')

        // const isValidPassword = await compare(dto.password, user.password)
        // if (!isValidPassword) throw new UnauthorizedException('Invalid password')

        return user
    }
}
