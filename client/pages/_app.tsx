import type {AppProps} from 'next/app'
import '../styles/globals.css'
import '../app/assets/styles/globals.sass'
import {Provider} from "react-redux";
import {store, wrapper} from "../app/redux/store";

const MyApp = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest)
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    )
}

export default MyApp
