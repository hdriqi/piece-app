import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { isLoggedIn, login } from '../near'

const LoginPage = () => {
	const history = useHistory()

	useEffect(() => {
		if (isLoggedIn()) {
			history.replace('/explore')
		}
	}, [])

	return (
		<div className="max-w-4xl m-auto px-4">
			<div className="max-w-lg m-auto">
				<h1 className="font-title text-3xl">PIECE</h1>
				<button onClick={login}>Login with NEAR</button>
			</div>
		</div>
	)
}

export default LoginPage
