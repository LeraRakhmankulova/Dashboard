import { IAuthResponse } from "@/interfaces/IUser.interface"
import Cookies from "js-cookie"

export const saveTokenToStorage = (acessToken: string) => {
    Cookies.set('accessToken', acessToken)
}

export const removeTokenFromStorage = () => {
    Cookies.remove('accessToken')
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokenToStorage(data.accessToken)
    localStorage.setItem('user', JSON.stringify(data.user))
}