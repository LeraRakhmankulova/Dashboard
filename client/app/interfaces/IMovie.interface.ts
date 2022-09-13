import { IReview } from "./IReview.interface"

export interface IMovie {
    id: number
    name: string
    rating: string | null
    poster: string
    views: number
    reviews?: IReview[]
    fees: number
}

export interface IMovieDto
    extends Pick<IMovie, 'name' | 'fees' | 'poster'> { }
