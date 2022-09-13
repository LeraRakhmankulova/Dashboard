import { axiosClassic } from "api/interceptor"

export const ViewService = {
    async updateViews(movieId: string){
        return axiosClassic.patch(`/views/update/${movieId}`)
    }
}