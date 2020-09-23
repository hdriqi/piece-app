import React from 'react'
import Nav from '../components/Nav'
import { login } from '../near'

let user = {
	id: 'janedoe.testnet',
	avatar:
		'https://images.pexels.com/photos/4090852/pexels-photo-4090852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	bio:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

const LoginPage = () => {
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
