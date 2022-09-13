import { Controller, HttpCode, HttpStatus, Post, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Auth } from "src/user/decorators/auth.decorator";
import { MediaService } from "./media.service";
import {FileInterceptor} from '@nestjs/platform-express'

@Controller('media')
export class MediaController {
    constructor(private readonly mediaService: MediaService) { }

    @HttpCode(HttpStatus.OK)
    @Post()
    @Auth()
    @UseInterceptors(FileInterceptor('media'))
    async uploadMediaFile(
        @UploadedFile() mediaFile: Express.Multer.File,
        @Query('folder') folder?: string
    ) {
        return this.mediaService.saveMedia(mediaFile, folder)
    }
}