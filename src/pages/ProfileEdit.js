import React, { useState } from 'react'
import ImgCrop from '../components/ImgCrop'
import { contractUpdateProfile } from '../near'
import { upload } from '../skynet'

let user = {
	id: 'janedoe.testnet',
	avatar:
		'https://images.pexels.com/photos/4090852/pexels-photo-4090852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	bio:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

const ProfileEditPage = ({}) => {
	const [bio, setBio] = useState(user.bio || '')
	const [showImgCrop, setShowImgCrop] = useState(false)
	const [newAvatarFile, setNewAvatarFile] = useState(null)
	const [avatar, setAvatar] = useState(user.avatar || null)

	const _setImg = async (e) => {
		setNewAvatarFile(e.target.files[0])
		setShowImgCrop(true)
	}

	const _submit = async () => {
		const newData = {
			userId: user.id,
			avatar: avatar,
			bio: bio,
		}
		if (newAvatarFile && newAvatarFile.imgFile) {
			const skydata = await upload(newAvatarFile.imgFile)
			newData.avatar = skydata
		}
		console.log(newData)
		const response = await contractUpdateProfile(newData)
		console.log(response)
	}

	return (
		<div className="max-w-4xl m-auto px-4">
			{showImgCrop && (
				<ImgCrop
					size={{
						width: 900,
						height: 1600,
					}}
					input={newAvatarFile}
					left={(_) => setShowImgCrop(null)}
					right={(res) => {
						console.log(res)
						setAvatar(res.body)
						setNewAvatarFile(res.payload)
						setShowImgCrop(false)
					}}
				/>
			)}
			<div className="flex flex-wrap -mx-4 py-8">
				<div className="w-full md:w-1/3 px-4 mb-4">
					<div
						className="relative w-full"
						style={{
							paddingBottom: '177%',
						}}
					>
						<div className="absolute h-full w-full">
							<img className="w-full h-full object-cover" src={avatar} />
						</div>
						<div
							className="absolute w-full h-full flex items-center justify-center opacity-50 hover:opacity-100"
							style={{
								background: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%)`,
							}}
						>
							<input
								type="file"
								accept="image/*"
								// onClick={(e) => {
								// 	e.target.value = null
								// }}
								onChange={(e) => _setImg(e)}
								className="w-full h-full absolute opacity-0 cursor-pointer"
							/>
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6.93702 5.84538C7.00787 5.74688 7.08656 5.62631 7.18689 5.46372C7.22355 5.40433 7.32349 5.23944 7.39792 5.11665L7.39798 5.11654L7.4818 4.97841C8.31079 3.62239 8.91339 3 10 3H14C15.0866 3 15.6892 3.62239 16.5182 4.97841L16.6021 5.11664C16.6765 5.23943 16.7765 5.40433 16.8131 5.46372C16.9134 5.62631 16.9921 5.74688 17.063 5.84538C17.1097 5.91033 17.1505 5.96194 17.1838 6H20C21.6569 6 23 7.34315 23 9V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V9C1 7.34315 2.34315 6 4 6H6.8162C6.84949 5.96194 6.8903 5.91033 6.93702 5.84538ZM4 8C3.44772 8 3 8.44772 3 9V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V9C21 8.44772 20.5523 8 20 8H17C16.3357 8 15.8876 7.63641 15.4394 7.01326C15.3363 6.86988 15.2341 6.71332 15.1111 6.51409C15.069 6.44583 14.9596 6.26536 14.8846 6.14152L14.8118 6.02159C14.3595 5.28172 14.0867 5 14 5H10C9.91327 5 9.6405 5.28172 9.1882 6.02159L9.11543 6.14152L9.11502 6.14219C9.03998 6.26601 8.93092 6.44596 8.88887 6.51409C8.76592 6.71332 8.66375 6.86988 8.56061 7.01326C8.11237 7.63641 7.66434 8 7 8H4ZM20 10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10C18 9.44772 18.4477 9 19 9C19.5523 9 20 9.44772 20 10ZM7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13ZM15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="w-full md:w-2/3 px-4">
					<div>
						<label className="font-bold">Bio</label>
						<textarea
							type="text"
							value={bio}
							onChange={(e) => setBio(e.target.value)}
							className="mt-2 w-full h-32 p-2 bg-transparent border-2 border-gray-700 focus:border-black"
							placeholder="Write about you"
						/>
					</div>
					<div className="mt-8">
						<button
							onClick={_submit}
							className="shadow-bold font-title px-6 py-2 bg-primary-color text-white focus:outline-none"
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileEditPage
