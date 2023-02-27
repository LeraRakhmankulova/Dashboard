import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from "./user/user.module";
import {UserEntity} from "./user/entities/user.entity";
import {MovieModule} from './movie/movie.module';
import {MovieEntity} from "./movie/entities/movie.entity";
import { ReviewModule } from './review/review.module';
import {ReviewEntity} from "./review/entities/review.entity";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'Le26ra1703.',
            database: 'cinema',
            entities: [UserEntity, MovieEntity, ReviewEntity],
            synchronize: true,
            autoLoadEntities: true,
        }),
        UserModule,
        MovieModule,
        ReviewModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
