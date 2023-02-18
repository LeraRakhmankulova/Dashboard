import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { getSequelizeConfig } from './config/db.config';
import {UserService} from "./user/user.service";
import {UserController} from "./user/user.controller";

@Module({
  // imports: [
  //   // ConfigModule.forRoot(),
  //   // SequelizeModule.forRootAsync({
  //   //   imports: [ConfigModule],
  //   //   inject: [ConfigService],
  //   //   useFactory: getSequelizeConfig
  //   // }),
  // ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
