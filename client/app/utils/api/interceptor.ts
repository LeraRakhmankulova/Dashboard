import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from "nookies";
import axios from "axios"
import {UserApi} from "@/utils/api/user.api";
import {AdminApi} from "@/utils/api/admin.api";
import {MovieApi} from "@/utils/api/movie.api";
import {ReviewApi} from "@/utils/api/review.api";

export type ApiReturnType = {
    user: ReturnType<typeof UserApi>,
    admin: ReturnType<typeof AdminApi>,
    movie: ReturnType<typeof MovieApi>,
    review: ReturnType<typeof ReviewApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = cookies.token
    const instance = axios.create({
        baseURL: 'http://localhost:7777',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return {
        user: UserApi(instance),
        admin: AdminApi(instance),
        movie: MovieApi(instance),
        review: ReviewApi(instance)
    }
}