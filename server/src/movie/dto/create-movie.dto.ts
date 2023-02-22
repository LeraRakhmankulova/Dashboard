import {IsEmpty, IsNotEmpty} from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string

    genre: string

    rating: number

    poster: string

    views: number

    description?: string

    fees: number
}
