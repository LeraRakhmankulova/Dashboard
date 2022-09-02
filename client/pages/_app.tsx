import type { AppProps } from 'next/app'
import AuthProvider from 'providers/auth/AuthProvider'

import '../app/assets/styles/globals.sass'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	)
}

export default MyApp
