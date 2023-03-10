import {BadRequestException, Body, Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";
import {genSalt, hash} from "bcrypt";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
                private repository: Repository<UserEntity>) {
    }

    async create(@Body() userDto: CreateUserDto) {
        const salt = await genSalt(10)
        const {email} = userDto
        const found = await this.repository.findOneBy({email})
        if (found) throw new BadRequestException('This user already exist')
        return this.repository.save({
            fullname: userDto.fullname,
            email: userDto.email,
            password: await hash(userDto.password, salt),
            avatarPath: userDto.avatarPath
        });
    }

    findAll() {
        return this.repository.find();
    }

    async findOneById(id: number) {
        const found = await this.repository.findOneBy({id})
        if (!found) throw new NotFoundException("Not Found")
        return found;
    }

    async findOneByEmail(email: string) {
        const found = await this.repository.findOneBy({email})
        if (!found) throw new NotFoundException("Not Found")
        return found;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        const found = this.repository.findOneBy({id})
        if (!found) throw new NotFoundException("Not Found")
        return this.repository.update(id, updateUserDto);
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}
