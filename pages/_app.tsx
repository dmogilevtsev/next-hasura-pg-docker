import 'bootstrap/dist/css/bootstrap.min.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any) {
	const apolloClient = useApollo(pageProps)
	return (
		<ApolloProvider client={ apolloClient }>
			<Component { ...pageProps } />
		</ApolloProvider>
	)
}