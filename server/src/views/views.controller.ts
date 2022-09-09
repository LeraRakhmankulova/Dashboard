import { Controller, HttpCode, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ViewsService } from './views.service';

@Controller('views')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) { }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Post('update/:movieId')
  async updateViews(@Param('movieId') movieId: string) {
    return this.viewsService.updateViews(+movieId)
  }
}
