import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateReviewDto} from './dto/create-review.dto';
import {UpdateReviewDto} from './dto/update-review.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ReviewEntity} from "./entities/review.entity";
import {createQueryBuilder, Repository} from "typeorm";

@Injectable()
export class ReviewService {
    constructor(@InjectRepository(ReviewEntity)
                private repository: Repository<ReviewEntity>) {
    }

    create(reviewDto: CreateReviewDto) {
        return this.repository.save({
            description: reviewDto.description,
            views: reviewDto.views,
            movie: {id: reviewDto.movieId}
        });
    }

    findAll() {
        return this.repository
            .createQueryBuilder("review")
            .orderBy("review.createdAt", "DESC")
            .getMany()
    }

    findAllByPopular() {
        return this.repository
            .createQueryBuilder("review")
            .orderBy("review.views", "DESC")
            .getMany();
    }

    findOne(id: number) {
        const found = this.repository.findOneBy({id})
        if (!found) throw new NotFoundException('Not Found')
        this.repository
            .createQueryBuilder("review")
            .whereInIds(id)
            .update()
            .set({views: () => 'views + 1'})
            .where("id = :id", {id})
            .execute()
        return found
    }

    update(id: number, updateReviewDto: UpdateReviewDto) {
        return this.repository.update(id, updateReviewDto);
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}
