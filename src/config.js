const CONTRACT_NAME = 'dev-v1.piece.testnet'

function getConfig(env) {
	return {
		networkId: 'testnet',
		nodeUrl: 'https://rpc.testnet.near.org',
		contractName: CONTRACT_NAME,
		walletUrl: 'https://wallet.testnet.near.org',
		helperUrl: 'https://helper.testnet.near.org',
		explorerUrl: 'https://explorer.testnet.near.org',
	}
}

module.exports = getConfig
