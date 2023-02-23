import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string

    @IsString()
    genre: string

    rating: number

    @IsString()
    poster: string

    views: number

    @IsString()
    description?: string

    fees: number

    year: number
}
