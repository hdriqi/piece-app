import React, { useEffect, useState } from 'react'
import Activity from '../components/Activity'
import { contractGetBalanceActivityList } from '../near'
import { useStore } from '../store'
import { prettyBalance } from '../utils'

const ProfileBalancePage = () => {
	const { userId, userBalance } = useStore(
		(state) => state
	)

	const [activityList, setActivityList] = useState([])

	const _getBalanceActivityList = async () => {
		const balanceActivityList = await contractGetBalanceActivityList({
			userId: userId,
			page: 0,
		})
    setActivityList(balanceActivityList)
	}
	useEffect(() => {
		if (userId) {
			_getBalanceActivityList()
		}
	}, [userId])

	return (
		<div className="max-w-4xl m-auto px-4">
			<div className="flex items-center justify-center">
				<div className="text-center">
          <h4>My Balance</h4>
					<h2 className="font-title text-2xl">
						{prettyBalance(userBalance, 24, 4)} Ⓝ
					</h2>
				</div>
			</div>
			<div className="pt-16 max-w-sm m-auto">
				<h3 className="font-title text-2xl">Activity</h3>
				{activityList.map((act, idx) => {
					return (
						<div key={idx} className="mt-4">
							<Activity data={act} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ProfileBalancePage
