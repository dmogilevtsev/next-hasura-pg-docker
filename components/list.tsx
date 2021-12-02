import React, { useState } from 'react'

const List = () => {
	const [ list, setList ] = useState([
		{ id: 1, title: 'Hello', description: 'World' },
		{ id: 2, title: 'Hello 2', description: 'World 2' },
		{ id: 3, title: 'Hello 3', description: 'World 3' },
	])
	return (
		<ul className="list-group">
			{ list.map(l => <li className="list-group-item" key={ l.id }>{ l.title } - { l.description }</li>) }
		</ul>
	)
}

export default List