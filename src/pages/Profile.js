import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Nav from '../components/Nav'

let user = {
	id: 'janedoe.testnet',
	avatar:
		'https://images.pexels.com/photos/4090852/pexels-photo-4090852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	bio:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

const ProfilePage = () => {
  // const params = useParams()
  const query = useLocation().query
  if (query.user) {
    user = query.user
  }

	return (
		<div className="max-w-4xl m-auto px-4">
			<Nav isLoggedIn={true} />
			<div className="flex flex-wrap -mx-4 py-8">
				<div className="w-full md:w-1/3 px-4">
					<div
						className="relative w-full"
						style={{
							paddingBottom: '177%',
						}}
					>
						<div className="absolute h-full w-full">
							<img className="w-full h-full object-cover" src={user.avatar} />
						</div>
					</div>
				</div>
				<div className="w-full md:w-2/3 px-4">
					<h1 className="font-title text-3xl">{user.id}</h1>
					<p className="mt-4">{user.bio}</p>
					<div className="hidden md:block mt-8">
						<button className="shadow-bold font-title px-6 py-2 bg-primary-color text-white focus:outline-none">
							Support 5 Ⓝ
						</button>
					</div>
				</div>
				<div className="w-full md:hidden">
					<div className="w-full h-16"></div>
					<div className="fixed bottom-0 left-0 right-0">
						<div className="p-4">
							<button className="w-full shadow-bold font-title px-6 py-2 bg-primary-color text-white focus:outline-none">
								Support 5 Ⓝ
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
