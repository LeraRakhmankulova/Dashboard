import {Column, PrimaryGeneratedColumn} from "typeorm";
import {IsNotEmpty} from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    name: string

    rating: number | null

    poster: string

    views: number

    // @Column()
    // reviews?: IReview[]

    fees: number
}
