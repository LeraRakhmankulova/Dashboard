import {IsEmail, IsNotEmpty, Min, MinLength} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    fullname: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @MinLength(6)
    @IsNotEmpty()
    password: string

    avatarPath: string
}
