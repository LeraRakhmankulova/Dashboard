import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MovieModel } from './movie.model';
import { ViewsService } from 'src/views/views.service';

@Module({
  imports: [SequelizeModule.forFeature([MovieModel])],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
