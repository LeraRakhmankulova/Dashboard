import { IsNumber, IsString } from "class-validator";

export class MovieDto {
    @IsString()
    name: string

    @IsString()
    poster: string

    @IsNumber()
    fees: number
}