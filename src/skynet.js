import { SkynetClient } from 'skynet-js'

const client = new SkynetClient('https://siasky.net/')

export async function upload(file) {
	try {
		const res = await client.uploadFile(file)
		const link = res.split(':')[1]
		const protocol = 'sia://'
		return protocol + link
	} catch (error) {
		console.log(error)
	}
}
