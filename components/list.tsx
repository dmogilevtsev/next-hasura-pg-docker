import React from 'react'
import { gql, useQuery } from '@apollo/client'

export const ALL_TAILS_QUERY = gql`
    query {
        long_tails {
            id
            title
            description
        }
    }
`

interface ITail {
	id: number
	title: string
	description: string
}

const List = () => {
	const { loading, error, data } = useQuery(ALL_TAILS_QUERY)

	if (error) return <div className="alert alert-warning">Error loading tails.</div>
	if (loading) return <div>Loading..</div>

	const { long_tails: list } = data
	return (
		<table className="table table-sm table-hover mt-2">
			<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Title</th>
				<th scope="col">Description</th>
			</tr>
			</thead>
			<tbody>
			{ list.map((l: ITail) => (
				<tr key={ l.id }>
					<th scope="row">{ l.id }</th>
					<td>{ l.title }</td>
					<td>{ l.description }</td>
				</tr>
			)) }
			</tbody>
		</table>
	)
}

export default List