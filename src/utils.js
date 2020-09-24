export const prettyBalance = (balance, decimals = 18, len = 8) => {
	const diff = balance.toString().length - (10 ** decimals).toString().length
	const fixedPoint = Math.max(1, Math.min(len, len - diff))
	const finalBalance = (balance / 10 ** decimals)
		.toFixed(fixedPoint)
		.toLocaleString()
	const [head, tail] = finalBalance.split('.')
	const formattedHead = head.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return `${formattedHead}.${tail}`
}

export const getImgUrl = (url) => {
	const [protocol, link] = url
	if (protocol === 'sia') {
		return `https://siasky.net/${link}`
	}
	return url
}
