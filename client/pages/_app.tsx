import type {AppProps} from 'next/app'
import '../styles/globals.css'
import '../app/assets/styles/globals.sass'
import {Provider} from "react-redux";
import {store} from "../app/redux/store";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
