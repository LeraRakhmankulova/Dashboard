import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import AuthProvider from 'providers/auth/AuthProvider'

import '../app/assets/styles/globals.sass'

export const queryClient = new QueryClient({
	defaultOptions:{
		queries:{
			refetchOnWindowFocus: false //выключила обновление страницы при переходе на новую вкладку
		}
	}
})

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</QueryClientProvider>
	)
}

export default MyApp
