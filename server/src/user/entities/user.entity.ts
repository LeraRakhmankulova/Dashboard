import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    fullname: string

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    password: string

    @Column({nullable: true})
    avatarPath?: string

    @CreateDateColumn()
    createdAt: Date
}
