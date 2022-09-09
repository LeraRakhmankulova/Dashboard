import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { WhereOptions } from 'sequelize';
import { ReviewModel } from 'src/review/review.model';
import { UserModel } from 'src/user/user.model';
import { MovieDto } from './dto/movie.dto';
import { MovieModel } from './movie.model';

@Injectable()
export class MovieService {
    constructor(
        @InjectModel(MovieModel)
        private readonly movieModel: typeof MovieModel
    ) { }

    async byId(id: number) {
        const movie = await this.movieModel.findOne({
            where: { id },
            include: [{
                model: ReviewModel,
                include: [UserModel]
            }]
        })
        if (!movie) throw new NotFoundException('Video not found')
        return movie
    }

    async getAll(searchTerm?: string) {
        let options: WhereOptions<MovieModel> = {}

        if (searchTerm)
            options = {
                [Op.or]: [{ name: { like: `%${searchTerm}%` } }]
            }

        return this.movieModel.findAll({
            where: {
                ...options
            },
            order: [['createdAt', 'DESC']],
            include: [
                {
                    all: true
                }
            ]
        })
    }

    async create() {
        const movie = await this.movieModel.create()
        return movie.id
    }

    async update(id: number, dto: MovieDto) {
        const movie = await this.byId(id)

        return movie.update({
            ...movie,
            ...dto
        })
    }

    async delete(id: number) {
        return this.movieModel.destroy({ where: { id } })
    }
}
