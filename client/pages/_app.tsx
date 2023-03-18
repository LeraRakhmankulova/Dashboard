import type {AppProps} from 'next/app'
import '../styles/globals.css'
import '../app/assets/styles/globals.sass'
import {wrapper} from "../app/redux/store";
import {parseCookies} from "nookies";
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
            const {authToken} = parseCookies(ctx)
            const userData = await Api(ctx).user.getMe(authToken)
            store.dispatch(saveData(userData))
        } catch (err) {
            console.warn(err)
        }

        return {pageProps: Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}}
    }
)
export default wrapper.withRedux(App)
