import {AxiosInstance} from 'axios';
import {LoginFormType, RegisterFormType} from "@/interfaces/IAuthFields.interface";

export const UserApi = (instance: AxiosInstance) => ({
    async register(dto: RegisterFormType) {
        const {data} = await instance.post('auth/register', dto)
        return data
    },
    async login(dto: LoginFormType) {
        const {data} = await instance.post('auth/login', dto)
        return data
    },
    async getMe() {
        const {data} = await instance.get('auth/me')
        return data
    }
})
