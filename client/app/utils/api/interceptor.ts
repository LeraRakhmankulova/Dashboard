import axios from 'axios';
import {LoginFormType, RegisterFormType} from "@/interfaces/IAuthFields.interface";

export const instance = axios.create({
    baseURL: 'http://localhost:7777/',
})

export const UserApi = {
    async register(dto: RegisterFormType) {
        const {data} = await instance.post('user', dto)
        return data
    },
    async login(dto: LoginFormType) {
        const {data} = await instance.get('/auth/login')
        return data
    }
}