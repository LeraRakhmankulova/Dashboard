import {IsEmail, Min} from "@nestjs/class-validator";
import {Column} from "typeorm";

export class CreateUserDto {
    @Column()
    fullname: string

    @IsEmail()
    @Column()
    email: string

    @Min(6)
    @Column({nullable: false})
    password: string

    @Column()
    avatarPath: string
}
