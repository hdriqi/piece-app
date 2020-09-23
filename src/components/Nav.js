import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ isLoggedIn }) => {
	return (
		<nav className="flex items-center justify-between py-6">
			<div className="flex items-center">
				<Link to="/">
					<h3 className="font-title">PIECE</h3>
				</Link>
				<Link to="/explore">
					<h4 className="text-lg ml-8">Explore</h4>
				</Link>
			</div>
			<div className="flex items-center">
				{isLoggedIn ? (
					<>
						<div className="hidden md:block">
							<h5 className="text-sm">Balance</h5>
							<h4 className="font-title">100 Ⓝ</h4>
						</div>
						<div className="hidden md:block ml-8">
							<h5 className="text-sm">Reward</h5>
							<h4 className="font-title">0.5 Ⓝ</h4>
						</div>
						<div className="ml-8">
							<h4>userid.testnet</h4>
						</div>
					</>
				) : (
					<h4 className="text-lg">Login</h4>
				)}
			</div>
		</nav>
	)
}

export default Nav
