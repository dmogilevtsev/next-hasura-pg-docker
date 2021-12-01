import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	uri: 'https://promoted-man-37.hasura.app/v1/graphql',
	cache: new InMemoryCache(),
})