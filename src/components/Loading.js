import React from 'react'

const Loading = ({ size, color }) => {
	const styles = _styles(size, color)
	return (
		<div style={styles.loading}>
			<div style={styles['loading-child']}>
				<div style={styles['loading-child div']}></div>
			</div>
		</div>
	)
}

const _styles = (size = 20, color = '#ffffff') => ({
	'loading-child div': {
		position: 'absolute',
		width: `${size / 2}px`,
		height: `${size / 2}px`,
		border: `${size / 10}px solid ${color}`,
		borderTopColor: 'transparent',
		borderRadius: '50%',
		animation: 'loading-spinner 1s linear infinite',
		top: `${size / 2}px`,
		left: `${size / 2}px`,
		boxSizing: 'content-box',
	},
	loading: {
		width: `${size}px`,
		height: `${size}px`,
		display: 'inline-block',
		overflow: 'hidden',
		background: 'none',
	},
	'loading-child': {
		width: '100%',
		height: '100%',
		position: 'relative',
		transform: 'translateZ(0) scale(1)',
		backfaceVisibility: 'hidden',
		transformOrigin: '0 0',
	},
})

export default Loading
