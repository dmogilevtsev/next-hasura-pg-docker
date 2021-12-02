import React from 'react'
import { useRouter } from 'next/router'
import MainContainer from '../components/main-container'
import data from '../data.json'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { tail: '1' } },
		],
		fallback: true,
	}
}

export async function getStaticProps(context: any) {
	return {
		props: { data },
	}
}

export const TAIL_ID = gql`
    query getTail($tail: String!){
        long_tails(where: {tail: {_eq: $tail}}) {
            json_id
        }
    }
`

const Tail = ({ data }: any) => {
	const { query: { tail } } = useRouter()
	const { loading, error, data: dt } = useQuery(TAIL_ID, { variables: { tail } })
	if (error) return <div className="alert alert-warning">Error loading tails.</div>
	if (loading) return <div>Loading..</div>

	const result = data.filter((d: any) => d.id === dt.long_tails[0].json_id)
	return (
		<MainContainer>
			<Link href="/">Назад</Link>
			<ul className="list-group">
				{ result.map((dt: any) => <li key={ dt.id } className="list-group-item">{ JSON.stringify(dt, null, 2) }</li>) }
			</ul>
		</MainContainer>
	)
}

export default Tail