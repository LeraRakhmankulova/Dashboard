import type {AppProps} from 'next/app'
import '../styles/globals.css'
import '../app/assets/styles/globals.sass'
import {wrapper} from "../app/redux/store";
import {saveData} from "../app/redux/slices/user.slice";
import {Api} from "@/utils/api/interceptor";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}

App.getInitialProps = wrapper.getInitialAppProps(
    (store) => async ({ctx, Component}) => {
        try {
            const userData = await Api(ctx).user.getMe()
            store.dispatch(saveData(userData))
        } catch (err) {
            if(ctx.asPath === '/write'){
                ctx.res?.writeHead(302, {
                    Location: '/404'
                })
                ctx.res?.end()
            }
            console.warn(err)
        }

        return {pageProps: Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}}
    }
)
export default wrapper.withRedux(App)
