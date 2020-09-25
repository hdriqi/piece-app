import React from 'react'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../utils'

const ProfileCard = ({ user }) => {
	return (
		<Link to={{
      pathname:  `/${user.userId}`,
      query: {
        user: user
      }
    }}>
			<div className="w-full">
				<div
					className="relative w-full"
					style={{
						paddingBottom: '177%',
					}}
				>
					<div className="absolute h-full w-full">
						<img className="w-full h-full object-cover bg-black" src={getImgUrl(user.avatar)} />
					</div>
					<div
						className="absolute h-full w-full"
						style={{
							background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.80) 100%)`,
						}}
					>
						<div className="flex h-full items-end">
							<div className="overflow-hidden p-2">
								<h4 className="font-title text-primary-color">{user.userId}</h4>
								<p className="truncate text-white text-sm">{user.bio}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProfileCard
