import { SkynetClient } from 'skynet-js'

const client = new SkynetClient('https://siasky.net/')

export async function upload(file) {
	try {
		const res = await client.uploadFile(file)
		console.log(res)
		return res
	} catch (error) {
		console.log(error)
	}
}
