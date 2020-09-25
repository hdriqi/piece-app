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
			<div className="max-w-lg pt-24 text-center m-auto">
				<h1 className="font-title text-3xl">PIECE</h1>
				<h3 className="mt-2 text-xl text-gray-800">
					An incentivized protocol both for creators and supporters.
				</h3>
				<button
					onClick={login}
					className="mt-8 shadow-bold font-title px-6 py-2 bg-primary-color text-white focus:outline-none"
				>
					Login with NEAR
				</button>
			</div>
		</div>
	)
}

export default LoginPage
