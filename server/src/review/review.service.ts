import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ReviewDto } from './dto/review.dto';
import { ReviewModel } from './review.model';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(ReviewModel)
        private readonly reviewModel: typeof ReviewModel
    ){}

    async create(userId: number, dto: ReviewDto){
        return this.reviewModel.create({
            userId,
            ...dto
        })
    }
}
