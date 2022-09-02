import { IReview } from "./IReview.interface"

export interface IMovie{
    id: number
    name: string
    rating: string
    poster: string
    views: number
    reviews?: IReview[]
    fees: number
}