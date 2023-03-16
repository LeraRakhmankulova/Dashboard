import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from "nookies";
import axios from "axios"
import {UserApi} from "@/utils/api/interceptor";

export type ApiReturnType = {
    u8ser: ReturnType<typeof UserApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = cookies.token
    const instance = axios.create({
        baseURL: 'http://localhost:7777',
        headers: {
            Authorization: `Bearer ` + token
        }
    })
}