import React from 'react'
import { parseDateTime } from '../utils'

const Activity = ({ data }) => {
	return (
		<>
			<p>
				Receive <b>{prettyBalance(data.value, 24, 4)}</b> from{' '}
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