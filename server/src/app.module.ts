import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizeConfig } from './config/db.config';
import { MovieModule } from './movie/movie.module';
import { ReviewModule } from './review/review.module';
import { ViewsModule } from './views/views.module';
import { UserModule } from './user/user.module';
import { MediumModule } from './medium/medium.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig
    }),
    UserModule,
    MovieModule,
    ReviewModule,
    ViewsModule,
    MediumModule,
    MediaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
