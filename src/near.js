import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import { parseNearAmount } from 'near-api-js/lib/utils/format'
import getConfig from './config'

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract & set global variables
export async function initContract() {
	// Initialize connection to the NEAR testnet
	const near = await connect(
		Object.assign(
			{ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
			nearConfig
		)
	)

	// Initializing Wallet based Account. It can work with NEAR testnet wallet that
	// is hosted at https://wallet.testnet.near.org
	window.walletConnection = new WalletConnection(near)

	// Getting the Account ID. If still unauthorized, it's just empty string
	window.accountId = window.walletConnection.getAccountId()

	window.account = window.walletConnection.account()

	// Initializing our contract APIs by contract name and configuration
	window.contract = await new Contract(
		window.account,
		nearConfig.contractName,
		{
			// View methods are read only. They don't modify the state, but usually return some value.
			viewMethods: [
				'getReward',
				'getProfile',
				'getProfileList',
				'getRewardActivityList',
				'getBalanceActivityList',
			],
			// Change methods can modify the state. But you don't receive the returned value when called.
			changeMethods: ['piece', 'claimReward', 'updateProfile'],
		}
	)
}

export function logout() {
	window.walletConnection.signOut()
	// reload page
	window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
	// Allow the current app to make calls to the specified contract on the
	// user's behalf.
	// This works by creating a new access key for the user's account and storing
	// the private key in localStorage.
	window.walletConnection.requestSignIn(
		nearConfig.contractName,
		'Piece Protocol'
	)
}

export function isLoggedIn() {
	return window.walletConnection.isSignedIn()
}

export function getBalance() {
	return window.account.getAccountBalance()
}

export function getAccountId() {
	return window.accountId
}

export function contractGetReward(params) {
	return window.contract.getReward(params)
}

export function contractClaimReward() {
	return window.contract.claimReward()
}

export function contractUpdateProfile(params) {
	return window.contract.updateProfile(params)
}

export function contractGetProfile(params) {
	return window.contract.getProfile(params)
}

export function contractGetProfileList(params) {
	return window.contract.getProfileList(params)
}

export function contractGetRewardActivityList(params) {
	return window.contract.getRewardActivityList(params)
}

export function contractGetBalanceActivityList(params) {
	return window.contract.getBalanceActivityList(params)
}

export function contractPiece(params) {
	return window.contract.piece(params, '100000000000000', parseNearAmount('5'))
}
