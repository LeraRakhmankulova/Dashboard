import { IReview } from "./IReview.interface"

export interface IMovie {
    id: number
    name: string
    rating: number | null
    poster: string
    views: number
    reviews?: IReview[]
    fees: number
}

export interface IMovieDto
    extends Pick<IMovie, 'name' | 'fees' | 'poster'> { }

export type MovieType ={
    name: string,
    genre: string,
    rating: number,
    poster?: string,
    views: number,
    description?: string,
    fees: number,
    year: number
}