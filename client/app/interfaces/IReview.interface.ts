import { IMovie } from "./IMovie.interface";
import { IUser } from "./IUser.interface";

export interface IReview{
    id: number
    user: IUser
    movie: IMovie
    description: string
}