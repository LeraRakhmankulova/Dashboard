import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReviewModel } from './review.model';

@Module({
  imports: [SequelizeModule.forFeature([ReviewModel])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {}
