import {Body, Injectable, NotFoundException} from '@nestjs/common';
import {CreateMovieDto} from './dto/create-movie.dto';
import {UpdateMovieDto} from './dto/update-movie.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {MovieEntity} from "./entities/movie.entity";
import {Repository} from "typeorm";
import {SearchMovieDto} from "./dto/search-movie.dto";

@Injectable()
export class MovieService {
    constructor(@InjectRepository(MovieEntity)
                private repository: Repository<MovieEntity>) {
    }

    create(@Body() movieDto: CreateMovieDto) {
        return this.repository.save(movieDto)
    }

    findAll() {
        return this.repository
            .createQueryBuilder("movie")
            .orderBy("movie.year", "DESC").getMany();
    }

    findAllByRating() {
        return this.repository
            .createQueryBuilder("movie")
            .orderBy("movie.rating", "DESC").getMany();
    }

    findAllByFees() {
        return this.repository
            .createQueryBuilder("movie")
            .orderBy("movie.fees", "DESC").getMany();
    }

    findAllByViews() {
        return this.repository
            .createQueryBuilder("movie")
            .orderBy("movie.views", "DESC").getMany();
    }

    findOne(id: number) {
        const found = this.repository.findOneBy({id})
        this.repository
            .createQueryBuilder("movie")
            .whereInIds(id)
            .update()
            .set({views: () => 'views + 1'})
            .where("id = :id", {id})
            .execute()
        if (!found) throw  new NotFoundException('Not Found')
        return found;
    }

    // async search(dto: string) {
    //     const res = await this.repository
    //         .createQueryBuilder("movie")
    //         .where("movie.name = :name", {name: dto.name})
    //         .getMany()
    //     return res
        // if(dto.name){
        //     qb.where(`movie.name ILIKE :name`)
        // }
        // if(dto.genre){
        //     qb.where(`movie.genre ILIKE :genre`)
        // }

    update(id: number, updateMovieDto: UpdateMovieDto) {
        const found = this.repository.findOneBy({id})
        if (!found) throw  new NotFoundException('Not Found')
        return this.repository.update(id, updateMovieDto);
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}
