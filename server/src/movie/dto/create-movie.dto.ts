import {IsNotEmpty} from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string

    genre: string

    rating: number | null

    poster: string

    views: number

    description?: string

    fees: number
}
