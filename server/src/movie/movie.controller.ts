import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/user/decorators/auth.decorator';
import { MovieDto } from './dto/movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  async getAll(@Query('searchTerm') searchTerm?: string) {
    return this.movieService.getAll(searchTerm)
  }

  @Get(':id')
  async getMovie(@Param('id') id?: string) {
    return this.movieService.byId(+id)
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  @Auth()
  async createMovie() {
    return this.movieService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Auth()
  async updateMovie(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(+id, dto)
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  @Auth()
  async deleteMovie(@Param('id') id: string) {
    return this.movieService.delete(+id)
  }
}
