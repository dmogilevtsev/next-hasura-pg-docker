import List, { ALL_TAILS_QUERY } from '../components/list'
import { initializeApollo, addApolloState } from '../lib/apolloClient'

function HomePage() {
	return <>
		<List/>
	</>
}

export async function getStaticProps() {
	const apolloClient = initializeApollo()

	await apolloClient.query({
		query: ALL_TAILS_QUERY,
	})

	return addApolloState(apolloClient, {
		props: {},
		revalidate: 1,
	})
}

export default HomePage