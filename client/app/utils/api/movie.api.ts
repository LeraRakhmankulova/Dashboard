import {AxiosInstance} from 'axios';
import {MovieType} from "@/interfaces/IMovie.interface";

export const MovieApi = (instance: AxiosInstance) => ({
    async create(dto: MovieType) {
        const {data} = await instance.post('/movie', dto)
        return data
    },
    async getAll() {
        const {data} = await instance.get('/movie')
        return data
    },
    async getAllByRating() {
        const {data} = await instance.get('/movie/rating')
        return data
    },
    async getAllByFees() {
        const {data} = await instance.get('/movie/fees')
        return data
    },
    async getAllByViews() {
        const {data} = await instance.get('/movie/views')
        return data
    },
    async getById(id: number) {
        const {data} = await instance.get(`/movie/${id}`)
        return data
    },
    async patch(id: number) {
        const {data} = await instance.patch(`/movie/${id}`)
        return data
    },
    async delete(id: number) {
        await instance.delete(`/review/${id}`)
    }
})