import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./local.strategy";
import {UserService} from "../user/user.service";

@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService, UserService, LocalStrategy]
})
export class AuthModule {
}
