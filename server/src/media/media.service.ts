import { Injectable } from '@nestjs/common';
import { writeFile, ensureDir } from 'fs-extra';
import path from 'path';
import { IMediaResponse } from './media.interface';

@Injectable()
export class MediaService {
    async saveMedia(
        mediaFile: Express.Multer.File,
        folder = 'default'
    ): Promise<IMediaResponse> {
        const uploadFolder = `${path}/uploads/${folder}`
        await ensureDir(uploadFolder)

        await writeFile(
            `${uploadFolder}/${mediaFile.originalname}`,
            mediaFile.buffer
        )

        return {
            url: `/uploads/${folder}/${mediaFile.originalname}`,
            name: mediaFile.originalname
        }
    }
}
