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

	if (error) return <div className="alert alert-warning" >Error loading tails.</div>
	if (loading) return <div>Loading..</div>

	const { long_tails: list } = data
	return (
		<ul className="list-group">
			{ list.map((l: ITail) => <li className="list-group-item" key={ l.id }>{ l.title } - { l.description }</li>) }
		</ul>
	)
}

export default List