import {Injectable} from '@nestjs/common';
import {CreateReviewDto} from './dto/create-review.dto';
import {UpdateReviewDto} from './dto/update-review.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {ReviewEntity} from "./entities/review.entity";
import {Repository} from "typeorm";

@Injectable()
export class ReviewService {
    constructor(@InjectRepository(ReviewEntity)
                private repository: Repository<ReviewEntity>) {
    }

    create(reviewDto: CreateReviewDto) {
        return this.repository.save(reviewDto);
    }

    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOneBy({id});
    }

    update(id: number, updateReviewDto: UpdateReviewDto) {
        return this.repository.update(id, updateReviewDto);
    }

    remove(id: number) {
        return this.repository.delete(id);
    }
}