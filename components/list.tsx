import React from 'react'
import { gql, useQuery } from '@apollo/client'
import MainContainer from './main-container'

export const ALL_TAILS_QUERY = gql`
    query {
        long_tails {
            tail
            json_id
        }
    }
`

interface ITail {
	tail: string
	json_id: number
}

const List = () => {
	const { loading, error, data } = useQuery(ALL_TAILS_QUERY)

	if (error) return <div className="alert alert-warning">Error loading tails.</div>
	if (loading) return <div>Loading..</div>

	const { long_tails: list } = data
	return (
		<MainContainer>
			<table className="table table-sm table-hover mt-2">
				<thead>
				<tr>
					<th scope="col">Tail</th>
					<th scope="col">json_id</th>
				</tr>
				</thead>
				<tbody>
				{ list.map((l: ITail) => (
					<tr key={ l.json_id }>
						<th scope="row">{ l.json_id }</th>
						<td>{ l.tail }</td>
					</tr>
				)) }
				</tbody>
			</table>
		</MainContainer>
	)
}

export default List