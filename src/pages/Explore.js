import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { contractGetProfileList } from '../near'

// const userList = [
// 	{
// 		id: 'janedoe.testnet',
// 		avatar:
// 			'https://images.pexels.com/photos/4090852/pexels-photo-4090852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// 		bio:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	},
// 	{
// 		id: 'johndoe.testnet',
// 		avatar:
// 			'https://images.pexels.com/photos/4264824/pexels-photo-4264824.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// 		bio:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	},
// 	{
// 		id: 'janedoe.testnet',
// 		avatar:
// 			'https://images.pexels.com/photos/4177839/pexels-photo-4177839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// 		bio: 'Write crypto',
// 	},
// ]

const ExplorePage = () => {
	const [userList, setUserList] = useState([])

	const _getProfileList = async () => {
		const profileList = await contractGetProfileList({
			page: 0
		})
		setUserList(profileList)
	}

	useEffect(() => {
		if (userList.length === 0) _getProfileList()
	}, [])

	return (
		<div className="max-w-4xl m-auto px-4">
			<div className="flex flex-wrap -mx-4">
				{userList.map((user) => {
					return (
						<div className="w-full md:w-1/4 p-4">
							<ProfileCard user={user} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ExplorePage
