import {IsEmail, IsNotEmpty, Min} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    fullname: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @Min(6)
    @IsNotEmpty()
    password: string

    avatarPath: string
}
