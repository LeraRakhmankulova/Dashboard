import { ConfigService } from "@nestjs/config";
import { SequelizeModuleOptions } from "@nestjs/sequelize";

export const getSequelizeConfig = async (configService: ConfigService): Promise<SequelizeModuleOptions> => {
    return {
        dialect: 'postgres',
        host: 'localhost',
        port: configService.get('DATABASE_PORT'),
        database: configService.get('DATABASE_NAME'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        autoLoadModels: true,
        synchronize: true,
        logging: false
    }
}