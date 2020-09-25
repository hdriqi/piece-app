import React from 'react'
import { Link } from 'react-router-dom'
import { parseDateTime, prettyBalance } from '../utils'

const Activity = ({ data }) => {
	return (
		<>
			<p>
				Receive <b>{prettyBalance(data.value, 24, 8)}</b> Ⓝ from{' '}
				<Link to={`/${data.from}`}>
					<b>{data.from}</b>
				</Link>{' '}
			</p>
			<p className="text-sm text-gray-800">
				{parseDateTime(data.createdAt / 10 ** 6)}
			</p>
		</>
	)
}

export default Activity