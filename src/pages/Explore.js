import React, { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import { contractGetProfileList } from '../near'

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
