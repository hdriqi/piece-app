import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Activity from '../components/Activity'
import Loading from '../components/Loading'
import { contractGetBalanceActivityList } from '../near'
import { useStore } from '../store'
import { prettyBalance } from '../utils'

const ProfileBalancePage = () => {
	const { userId, userBalance } = useStore((state) => state)

	const [activityList, setActivityList] = useState([])
	const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

	const _getBalanceActivityList = async () => {
    if (isLoading) {
      return
    }
    setIsLoading(true)
		const balanceActivityList = await contractGetBalanceActivityList({
			userId: userId,
			page: page,
		})
		const newBalanceActivityList = [...activityList].concat(balanceActivityList)
		setActivityList(newBalanceActivityList)
		setPage(page + 1)
		if (balanceActivityList.length < 8) {
			setHasMore(false)
    }
    setIsLoading(false)
	}

	return (
		<div className="max-w-4xl m-auto px-4">
			<div className="flex items-center justify-center">
				<div className="text-center">
					<h4>My Balance</h4>
					<h2 className="font-title text-2xl">
						{prettyBalance(userBalance, 24, 8)} Ⓝ
					</h2>
				</div>
			</div>
			<div className="pt-16 max-w-sm m-auto">
				<h3 className="font-title text-2xl">Activity</h3>
				{userId && (
					<InfiniteScroll
						initialLoad={true}
						loadMore={_getBalanceActivityList}
						hasMore={hasMore}
						loader={
							<div className="flex items-center justify-center">
								<Loading size={40} color={'#4a5568'} />
							</div>
						}
					>
						{activityList.map((act, idx) => {
							return (
								<div key={idx} className="mt-4">
									<Activity data={act} />
								</div>
							)
						})}
					</InfiniteScroll>
				)}
			</div>
		</div>
	)
}

export default ProfileBalancePage
