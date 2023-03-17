import axios from 'axios';
import {LoginFormType, RegisterFormType} from "@/interfaces/IAuthFields.interface";
import {ReviewType} from "@/interfaces/IReview.interface";
import {MovieType} from "@/interfaces/IMovie.interface";

export const instance = axios.create({
    baseURL: 'http://localhost:7777/',
})

export const UserApi = () => ({
    async register(dto: RegisterFormType) {
        const {data} = await instance.post('auth/register', dto)
        return data
    },
    async login(dto: LoginFormType) {
        const {data} = await instance.post('auth/login', dto)
        return data
    },
    async getMe(authToken: string) {
        const {data} = await instance.get('auth/me', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        return data
    }
})

export const AdminApi = {
    async getAll() {
        const {data} = await instance.get('user')
        return data
    },
    async getById(id: number) {
        const {data} = await instance.get(`user/${id}`)
        return data
    },
    async deleteById(id: number) {
        await instance.delete(`user/${id}`)
    },
    async updaterById(id: number) {
        await instance.patch(`user/${id}`)
    }
}

export const ReviewApi = {
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
}

export const MovieApi = {
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
}