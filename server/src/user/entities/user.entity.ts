import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail, Min} from "@nestjs/class-validator";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @IsEmail()
    @Column()
    email: string;

    @Min(6)
    @Column({nullable: false})
    password: string

    @Column({nullable: true})
    avatarPath?: string
}
