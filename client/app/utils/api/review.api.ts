import {ReviewType} from "@/interfaces/IReview.interface";
import {AxiosInstance} from 'axios';

export const ReviewApi = (instance: AxiosInstance) => ({
    async create(dto: ReviewType) {
        const {data} = await instance.post('/review', dto)
        return data
    },
    async getAll() {
        const {data} = await instance.get('/review')
        return data
    },
    async getAllByPopular() {
        const {data} = await instance.get('/review/popular')
        return data
    },
    async getById(id: number) {
        const {data} = await instance.get(`/review/${id}`)
        return data
    },
    async patch(id: number) {
        const {data} = await instance.patch(`/review/${id}`)
        return data
    },
    async delete(id: number) {
        await instance.delete(`/review/${id}`)
    }
})