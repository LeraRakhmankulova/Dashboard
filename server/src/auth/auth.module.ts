import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./strategies/local.strategy";
import {AuthController} from "./auth.controller";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {jwtConstants} from "./constants";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Module({
    imports: [UserModule, PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '14d'}
        }),],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {
}
