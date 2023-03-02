import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [/^(.*)/],
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization', 'X-Forwarded-for'],
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 200,
    });
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(7777);
}

bootstrap();