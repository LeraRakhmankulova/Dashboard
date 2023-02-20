import {Body, Injectable, NotFoundException} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private repository: Repository<UserEntity>) {
    }

    create(@Body() userDto: CreateUserDto) {
        return this.repository.save(userDto);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        const found = this.repository.findOneBy({id})
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
