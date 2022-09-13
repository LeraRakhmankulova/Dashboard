import { IReview, IReviewDto } from "@/interfaces/IReview.interface"
import axios,{ axiosClassic } from "api/interceptor"

export const ReviewService = {
    // async getReviewById(id: string){
    //     return axiosClassic.get<IReview>(`/review/${id}`)
    // },

    // async getAall(?)
    async createReview(body: IReviewDto){
        return axios.post<string>('/review', body)
    }
}