import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../components/Loading'
import ProfileCard from '../components/ProfileCard'
import { contractGetProfileList } from '../near'

const ExplorePage = () => {
	const [userList, setUserList] = useState([])
	const [page, setPage] = useState(0)
	const [hasMore, setHasMore] = useState(true)

	const _getProfileList = async () => {
		const profileList = await contractGetProfileList({
			page: page,
		})
		const newUserList = [...userList].concat(profileList)
		setUserList(newUserList)
		setPage(page + 1)
		if (profileList.length === 0 || profileList.length < 8) {
			setHasMore(false)
		}
	}

	useEffect(() => {
		if (userList.length === 0) _getProfileList()
	}, [])

	return (
		<div className="max-w-4xl m-auto px-4">
			<InfiniteScroll
				style={{
					overflowX: 'hidden'
				}}
				dataLength={userList.length}
				next={_getProfileList}
				hasMore={hasMore}
				loader={
					<div className="flex items-center justify-center">
						<Loading size={40} color={'#4a5568'} />
					</div>
				}
			>
				<div className="flex flex-wrap -mx-4">
					{userList.map((user) => {
						return (
							<div className="w-full md:w-1/4 p-4">
								<ProfileCard user={user} />
							</div>
						)
					})}
				</div>
			</InfiniteScroll>
		</div>
	)
}

export default ExplorePage
