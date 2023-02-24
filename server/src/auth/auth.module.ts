import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {UserModule} from "../user/user.module";

@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService],
})
export class AuthModule {
}
