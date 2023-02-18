import { IMovie } from "./IMovie.interface";
import { IUser } from "./IUser.interface";

export interface IReview{
    id: number
    user: IUser
    movie: IMovie
    description: string
    createdAt: string
}

export interface IReviewDto extends Pick<IReview, 'description'>{
    movieId: number
}

export interface IComment{
    movieId: number
    reviews: IReview[]
}