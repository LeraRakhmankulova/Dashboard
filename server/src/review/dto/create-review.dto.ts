import {IsNotEmpty} from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty()
    description: string
}
