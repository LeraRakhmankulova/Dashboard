import type {AppProps} from 'next/app'
import '../styles/globals.css'
import '../app/assets/styles/globals.sass'

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp
