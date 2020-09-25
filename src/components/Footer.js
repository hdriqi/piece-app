import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="flex flex-wrap justify-between pt-32">
			<div className="mt-4 flex w-full md:w-2/3 justify-between md:justify-start">
				<Link to="/">
					<h4 className="text-lg">
						<p>Home</p>
					</h4>
				</Link>
				<Link to="/explore">
					<h4 className="text-lg ml-8">
						<p>Explore</p>
					</h4>
				</Link>
				<a
					className="hover:underline flex ml-8 text-lg"
					target="_blank"
					href="https://github.com/hdriqi/piece-app"
				>
					<p>Github</p>
					<svg
						className="fill-current"
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11.7042 13.7071L18.9971 6.41421V11H20.9971V3H12.9971V5H17.5829L10.29 12.2929L11.7042 13.7071ZM19 19V14H17V19H5V7H10V5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19Z"
						/>
					</svg>
				</a>
			</div>
			<h4 className="mt-4 w-full md:w-1/3 text-lg flex justify-center md:justify-end">
				<a
					className="hover:underline flex text-gray-800"
					target="_blank"
					href="https://paras.id"
				>
					<p>From Paras Team</p>
					<svg
						className="fill-current"
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11.7042 13.7071L18.9971 6.41421V11H20.9971V3H12.9971V5H17.5829L10.29 12.2929L11.7042 13.7071ZM19 19V14H17V19H5V7H10V5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19Z"
						/>
					</svg>
				</a>
			</h4>
		</div>
	)
}

export default Footer
