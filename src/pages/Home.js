import React from 'react'
import { Link } from 'react-router-dom'

import assetHowItWorks from '../assets/how-it-works.svg'

const HomePage = () => {
	return (
		<div className="max-w-4xl m-auto px-4">
			<div className="py-24 relative">
				<div className="max-w-xl ">
					<h1 className="font-title text-2xl">
						Piece rewards creators and their supporters.
					</h1>
					<h3 className="mt-2 text-xl text-gray-800">
						Share small portion of your future earning with your supporters, not
						with the platforms.
					</h3>
					<Link to="/explore">
						<button className="mt-8 shadow-bold font-title px-6 py-2 bg-primary-color text-white focus:outline-none">
							Explore Creator
						</button>
					</Link>
				</div>
				<div className="absolute bottom-0 w-full m-auto">
					<div
						style={{
							animation: 'up-down 2s linear infinite',
						}}
						className="flex flex-col items-center"
					>
						<p className="text-white-1">Scroll</p>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="fill-current"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12.7072 3.70712L11.293 2.29291L8.00008 5.5858L4.70718 2.29291L3.29297 3.70712L8.00008 8.41423L12.7072 3.70712ZM11.293 7.29291L8.00008 10.5858L4.70718 7.29291L3.29297 8.70712L8.00008 13.4142L12.7072 8.70712L11.293 7.29291Z"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap -mx-4 py-16">
				<div className="w-full md:w-1/2 py-8 px-4">
					<h1 className="font-title text-2xl text-primary-color">
						For Creator
					</h1>
					<h3 className="mt-2 text-lg text-gray-800">
						Get fund of your creative work. Piece is a way for your supporters
						to give thanks and appreciate your works.
					</h3>
				</div>
				<div className="w-full md:w-1/2 py-8 px-4">
					<h1 className="font-title text-2xl text-secondary-color">
						For Supporter
					</h1>
					<h3 className="mt-2 text-lg text-gray-800">
						Support your favorite creators and receive a small portion of their
						future earning. The earlier you support them, the more you can earn.
					</h3>
				</div>
			</div>
			<div className="pt-16 max-w-lg m-auto">
				<h3 className="mt-2 text-2xl font-title text-center">How it works</h3>
				<div className="mt-4 max-w-sm m-auto ">
					<img className="w-full" src={assetHowItWorks} />
				</div>
				<p className="mt-4 text-lg text-gray-800">
					When someone support a creator, a 10% cut and will be distributed to
					earlier supporters, not with the platforms. At a time, the 10% cut
					will be distributed evenly to 4 supporters in{' '}
					<b className="text-primary-color">rolling queue mechanism</b>. After
					that, that 4 supporters will be moved to the end of queue while the
					new supporter placed at the start of the queue.
				</p>
			</div>
		</div>
	)
}

export default HomePage
