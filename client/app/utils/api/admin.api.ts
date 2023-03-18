import {AxiosInstance} from 'axios';

export const AdminApi = (instance: AxiosInstance) => ({
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
})