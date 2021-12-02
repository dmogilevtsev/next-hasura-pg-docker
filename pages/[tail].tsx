import React from 'react'
import { useRouter } from 'next/router'
import MainContainer from '../components/main-container'

const Tail = () => {
	const { query: { tail } } = useRouter()
	return (
		<MainContainer>
			{tail}
		</MainContainer>
	)
}

export default Tail