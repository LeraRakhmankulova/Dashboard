import {Body, Injectable, NotFoundException} from '@nestjs/common';
import {CreateMovieDto} from './dto/create-movie.dto';
import {UpdateMovieDto} from './dto/update-movie.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {MovieEntity} from "./entities/movie.entity";
import {Repository} from "typeorm";

@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieEntity) private repository: Repository<MovieEntity>) {
    }

    create(@Body() movieDto: CreateMovieDto) {
        return this.repository.save(movieDto)
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        const found = this.repository.findOneBy({id})
        if (!found) throw  new NotFoundException('Not Found')
        return found;
    }

    update(id: number, updateMovieDto: UpdateMovieDto) {
        const found = this.repository.findOneBy({id})
        if (!found) throw  new NotFoundException('Not Found')
        return this.repository.update(id, updateMovieDto);
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}
