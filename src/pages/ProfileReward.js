import JSBI from 'jsbi'
import React, { useEffect, useState } from 'react'
import Activity from '../components/Activity'
import Loading from '../components/Loading'
import { contractClaimReward, contractGetRewardActivityList } from '../near'
import { useStore } from '../store'
import { prettyBalance } from '../utils'

const ProfileRewardPage = () => {
	const { userId, userBalance, setBalance, userReward, setReward } = useStore(
		(state) => state
	)

	const [activityList, setActivityList] = useState([])
	const [isSubmitting, setIsSubmitting] = useState(false)

	const _getRewardActivityList = async () => {
		const rewardActivityList = await contractGetRewardActivityList({
			userId: userId,
			page: 0,
		})
    setActivityList(rewardActivityList)
	}
	useEffect(() => {
		if (userId) {
			_getRewardActivityList()
		}
	}, [userId])

	const _claim = async () => {
		setIsSubmitting(true)
		try {
			await contractClaimReward()
			const newBalance = JSBI.add(
				JSBI.BigInt(userBalance),
				JSBI.BigInt(userReward)
			)
			setBalance(newBalance.toString())
			setReward('0')
		} catch (err) {
			console.log(err)
		}
		setIsSubmitting(false)
	}

	return (
		<div className="max-w-4xl m-auto px-4">
			<div className="flex items-center justify-center">
				<div className="text-center">
					<h4>My Reward</h4>
					<h2 className="font-title text-2xl">
						{prettyBalance(userReward, 24, 4)} Ⓝ
					</h2>
					<button
						disabled={isSubmitting}
						onClick={_claim}
						className="mt-4 shadow-bold font-title px-6 py-2 bg-primary-color text-white focus:outline-none"
					>
						{!isSubmitting ? (
							<p>Claim Reward</p>
						) : (
							<div className="flex items-center">
								<p className="mr-2">Claiming</p>
								<Loading />
							</div>
						)}
					</button>
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

export default ProfileRewardPage
