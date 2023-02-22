import {IsEmpty, IsNotEmpty} from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string

    genre: string

    @IsEmpty()
    rating?: number

    poster: string

    views: number

    description?: string

    fees: number
}
