import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty()
    description: string

    // @IsNumber()
    views: number

    @IsNotEmpty()
    movieId: number
}
