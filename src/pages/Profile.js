import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { contractGetProfile } from '../near'
import { getImgUrl } from '../utils'

const ProfilePage = () => {
	const params = useParams()
	const query = useLocation().query

	const [user, setUser] = useState(null)

	const _getProfile = async (userId) => {
		const profileData = await contractGetProfile({
			userId: userId,
		})
		setUser(profileData)
	}

	useEffect(() => {
		if (!user) {
			let userData
			if (query && query.user) {
				userData = query.user
				setUser(userData)
			} else {
				_getProfile(params.userId)
			}
		}
	}, [user, params])

	if (!user) {
		return null
	}

	return (
		<div className="max-w-4xl m-auto px-4">
			<div className="flex flex-wrap -mx-4 py-8">
				<div className="w-full md:w-1/3 px-4">
					<div
						className="relative w-full"
						style={{
							paddingBottom: '177%',
						}}
					>
						<div className="absolute h-full w-full">
							<img className="w-full h-full object-cover" src={getImgUrl(user.avatar)} />
						</div>
					</div>
				</div>
				<div className="w-full md:w-2/3 px-4">
					<h1 className="font-title text-3xl">{user.id}</h1>
					<p className="mt-4 whitespace-pre-line">{user.bio}</p>
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
