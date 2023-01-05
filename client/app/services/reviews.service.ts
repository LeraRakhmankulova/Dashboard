import { IReview, IReviewDto } from "@/interfaces/IReview.interface"
import interceptor from "api/interceptor"

export const ReviewService = {
    async createReview(body: IReviewDto){
        return interceptor.post<IReview>('/review', body)
    }
}