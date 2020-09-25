import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
	contractGetReward,
	getAccountId,
	getBalance,
	isLoggedIn,
	logout,
} from '../near'
import { useStore } from '../store'
import { prettyBalance } from '../utils'

const Nav = () => {
	const accModalRef = useRef()
	const location = useLocation()

	const {
		setUserId,
		userBalance,
		setBalance,
		userReward,
		setReward,
	} = useStore((state) => state)
	const [showAccountModal, setShowAccountModal] = useState(false)

	const _getBalance = async () => {
		const balance = await getBalance()
		setBalance(balance.available)
	}

	const _getReward = async () => {
		const reward = await contractGetReward({
			userId: getAccountId(),
		})
		setReward(reward)
	}

	const _logout = () => {
		logout()
		setUserId(null)
	}

	const toggleAccountModal = () => {
		setShowAccountModal(!showAccountModal)
	}

	useEffect(() => {
		const onClickEv = (e) => {
			if (!accModalRef.current.contains(e.target)) {
				setShowAccountModal(false)
			}
		}

		if (showAccountModal) {
			document.body.addEventListener('click', onClickEv)
		}

		return () => {
			document.body.removeEventListener('click', onClickEv)
		}
	}, [showAccountModal])

	useEffect(() => {
		_getBalance()
		_getReward()
	}, [])

	return (
		<nav className="flex items-center justify-between py-6">
			<div className="flex items-center">
				<Link to="/">
					<h3 className="font-title">PIECE</h3>
				</Link>
				<Link to="/explore">
					<h4 className="font-bold text-lg ml-8">
						<p className={`${location.pathname === '/explore' && 'underline'}`}>
							Explore
						</p>
					</h4>
				</Link>
			</div>
			<div className="flex items-center">
				{isLoggedIn() ? (
					<>
						<div className="hidden md:block">
							<Link to="/me/balance">
								<h5 className="text-sm">Balance</h5>
								<h4 className="font-title">
									{prettyBalance(userBalance, 24, 4)} Ⓝ
								</h4>
							</Link>
						</div>
						<div className="hidden md:block ml-8">
							<Link to="/me/reward">
								<h5 className="text-sm">Reward</h5>
								<h4 className="font-title">
									{prettyBalance(userReward, 24, 4)} Ⓝ
								</h4>
							</Link>
						</div>
						<div ref={accModalRef} className="ml-8 relative">
							<div className="flex items-center">
								<h4
									className="cursor-pointer font-bold"
									onClick={toggleAccountModal}
								>
									{getAccountId()}
								</h4>
								<div className="ml-1">
									<svg
										width="12"
										height="19"
										viewBox="0 0 21 19"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20.7846 0.392303L10.3923 18.3923L0 0.392304L20.7846 0.392303Z"
											fill="black"
										/>
									</svg>
								</div>
							</div>
							{showAccountModal && (
								<div className="absolute right-0 w-32 pt-4 z-10">
									<div className="px-2 pb-2 border-2 border-gray-800 bg-tertiary-color">
										<div className="md:hidden">
											<div className="pt-2">
												<Link onClick={toggleAccountModal} to="/me/balance">
													<h5 className="text-sm">Balance</h5>
													<h4 className="font-title">
														{prettyBalance(userBalance, 24, 4)} Ⓝ
													</h4>
												</Link>
											</div>
											<div className="pt-2">
												<Link onClick={toggleAccountModal} to="/me/reward">
													<h5 className="text-sm">Reward</h5>
													<h4 className="font-title">
														{prettyBalance(userReward, 24, 4)} Ⓝ
													</h4>
												</Link>
											</div>
										</div>
										<Link onClick={toggleAccountModal} to="/me/edit">
											<p className="pt-2 text-gray-800 hover:text-black">
												Edit Profile
											</p>
										</Link>
										<p
											onClick={_logout}
											className="cursor-pointer pt-2 text-gray-800 hover:text-black"
										>
											Logout
										</p>
									</div>
								</div>
							)}
						</div>
					</>
				) : (
					<Link to="/login">
						<h4 className="text-lg">Login</h4>
					</Link>
				)}
			</div>
		</nav>
	)
}

export default Nav
