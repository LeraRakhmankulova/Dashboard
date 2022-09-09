import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/user/decorators/auth.decorator';
import { CurrentUser } from 'src/user/decorators/user.decorator';
import { ReviewDto } from './dto/review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) { }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Post()
  @Auth()
  async createReview(@CurrentUser('id') id: string, @Body() dto: ReviewDto) {
    return this.reviewService.create(+id, dto)
  }
}
