//export const API_endpoint = "http://localhost:9003"
export const API_endpoint = "https://api-bancor.cotrader.com"
export const StableSymbol = "USDB(USDB)"
export const BancorGasLimit = "0x607a5C47978e2Eb6d59C6C6f51bc0bF411f4b85a"

// MAINNET
export const BancorRegistry = "0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4"
export const BNTToken = "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C"
export const USDBToken = "0x309627af60f0926daa6041b8279484312f2bf060"
export const USDBBNTToken = "0xd1146B08e8104EeDBa44a73B7bda1d102c6ceDC9"
export const ConvertersRegistryList = "0x7bdb720af9c0da53744aa007984031ceca528ad0"
// old // export const BancorNetwork = "0xeee90e509a639e95e3bb502b17a0eed6e014bfc0"
export const BancorNetwork = "0x0e936B11c2e7b601055e58c7E32417187aF4de4a"
export const BancorETH = "0xc0829421C1d260BD3cB3E0F06cfE2D52db2cE315"
export const EtherscanLink = "https://etherscan.io/"
export const gasPrice = 2000000000 // 2 gwei low gas price by default
export const netId = 1


// ROPSTEN
// export const BancorRegistry = "0xacbd1c5e8efae0387835841694f1c9e515052e54"
// export const BNTToken = "0x68b71E7F2b5fd0b19E61c9f2b642c9C4015D3dd3"
// export const USDBToken = "0x30884a0e6c1ae494667b834dc45ef5f5a70775ed"
// export const USDBBNTToken = "0xd1146B08e8104EeDBa44a73B7bda1d102c6ceDC9"
// export const ConvertersRegistryList = "0xb858d5a0e682a3fd441964a3c6e47db90c79fd91"
// export const BancorNetwork = "0x39Dd546F2DA1f6bb0fEa7A086cE04A519fCB6A1A"
// export const BancorETH = "0xd43391b8fa168dcb34517877334672bcc3343ca1"
// export const EtherscanLink = "https://ropsten.etherscan.io/"
// export const gasPrice = 5000000000 // 4 gwei
// export const netId = 3

export const ConvertersRegistryListABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "addConverter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "converters",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllConverters",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalConverters",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export const ABISmartToken = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_disable",
				"type": "bool"
			}
		],
		"name": "disableTransfers",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "version",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "standard",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "issue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "destroy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "transfersEnabled",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "string"
			},
			{
				"name": "_decimals",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_token",
				"type": "address"
			}
		],
		"name": "NewSmartToken",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Issuance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "Destruction",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_prevOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "OwnerUpdate",
		"type": "event"
	}
]

export const ABIConverter = [
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_CONVERTER_UPGRADER",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_connectorToken",
				"type": "address"
			},
			{
				"name": "_weight",
				"type": "uint32"
			},
			{
				"name": "_enableVirtualBalance",
				"type": "bool"
			},
			{
				"name": "_virtualBalance",
				"type": "uint256"
			}
		],
		"name": "updateConnector",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "connectors",
		"outputs": [
			{
				"name": "virtualBalance",
				"type": "uint256"
			},
			{
				"name": "weight",
				"type": "uint32"
			},
			{
				"name": "isVirtualBalanceEnabled",
				"type": "bool"
			},
			{
				"name": "isSaleEnabled",
				"type": "bool"
			},
			{
				"name": "isSet",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "connectorTokens",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BNT_TOKEN",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fromToken",
				"type": "address"
			},
			{
				"name": "_toToken",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getReturn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "allowRegistryUpdate",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferTokenOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_block",
				"type": "uint256"
			},
			{
				"name": "_v",
				"type": "uint8"
			},
			{
				"name": "_r",
				"type": "bytes32"
			},
			{
				"name": "_s",
				"type": "bytes32"
			}
		],
		"name": "quickConvertPrioritized",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_disable",
				"type": "bool"
			}
		],
		"name": "disableConversions",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CONTRACT_REGISTRY",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fromToken",
				"type": "address"
			},
			{
				"name": "_toToken",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			}
		],
		"name": "convertInternal",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptTokenOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_magnitude",
				"type": "uint8"
			}
		],
		"name": "getFinalAmount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "converterType",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			},
			{
				"name": "_weight",
				"type": "uint32"
			},
			{
				"name": "_enableVirtualBalance",
				"type": "bool"
			}
		],
		"name": "addConnector",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "liquidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawFromToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newManager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateRegistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_whitelist",
				"type": "address"
			}
		],
		"name": "setConversionWhitelist",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_conversionId",
				"type": "uint256"
			},
			{
				"name": "_block",
				"type": "uint256"
			},
			{
				"name": "_v",
				"type": "uint8"
			},
			{
				"name": "_r",
				"type": "bytes32"
			},
			{
				"name": "_s",
				"type": "bytes32"
			}
		],
		"name": "completeXConversion",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "version",
		"outputs": [
			{
				"name": "",
				"type": "uint16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "conversionFee",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_CONVERTER_FACTORY",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fromToken",
				"type": "address"
			},
			{
				"name": "_toToken",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			}
		],
		"name": "change",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "prevRegistry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BNT_CONVERTER",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_FORMULA",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "connectorTokenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_connectorToken",
				"type": "address"
			},
			{
				"name": "_sellAmount",
				"type": "uint256"
			}
		],
		"name": "getSaleReturn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_fromToken",
				"type": "address"
			},
			{
				"name": "_toToken",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			}
		],
		"name": "convert",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "registry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CONTRACT_FEATURES",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_disable",
				"type": "bool"
			}
		],
		"name": "disableTokenTransfers",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "claimTokensEnabled",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_fromConnectorToken",
				"type": "address"
			},
			{
				"name": "_toConnectorToken",
				"type": "address"
			},
			{
				"name": "_sellAmount",
				"type": "uint256"
			}
		],
		"name": "getCrossConnectorReturn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_NETWORK",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_GAS_PRICE_LIMIT",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CONVERTER_CONVERSION_WHITELIST",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "maxConversionFee",
		"outputs": [
			{
				"name": "",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_connectorToken",
				"type": "address"
			},
			{
				"name": "_disable",
				"type": "bool"
			}
		],
		"name": "disableConnectorSale",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_connectorToken",
				"type": "address"
			},
			{
				"name": "_depositAmount",
				"type": "uint256"
			}
		],
		"name": "getPurchaseReturn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_enable",
				"type": "bool"
			}
		],
		"name": "enableClaimTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "restoreRegistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "conversionsEnabled",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "conversionWhitelist",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_X",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptManagement",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "fund",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_X_UPGRADER",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "upgrade",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_connectorToken",
				"type": "address"
			}
		],
		"name": "getConnectorBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newManager",
				"type": "address"
			}
		],
		"name": "transferManagement",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_conversionFee",
				"type": "uint32"
			}
		],
		"name": "setConversionFee",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			}
		],
		"name": "quickConvert",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "NON_STANDARD_TOKEN_REGISTRY",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_disable",
				"type": "bool"
			}
		],
		"name": "disableRegistryUpdate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "claimTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			},
			{
				"name": "_registry",
				"type": "address"
			},
			{
				"name": "_maxConversionFee",
				"type": "uint32"
			},
			{
				"name": "_connectorToken",
				"type": "address"
			},
			{
				"name": "_connectorWeight",
				"type": "uint32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_fromToken",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_toToken",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_trader",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_return",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_conversionFee",
				"type": "int256"
			}
		],
		"name": "Conversion",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_connectorToken",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_tokenSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_connectorBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_connectorWeight",
				"type": "uint32"
			}
		],
		"name": "PriceDataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_prevFee",
				"type": "uint32"
			},
			{
				"indexed": false,
				"name": "_newFee",
				"type": "uint32"
			}
		],
		"name": "ConversionFeeUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_conversionsEnabled",
				"type": "bool"
			}
		],
		"name": "ConversionsEnable",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_prevManager",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_newManager",
				"type": "address"
			}
		],
		"name": "ManagerUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_prevOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "OwnerUpdate",
		"type": "event"
	}
]

export const ABIBancorNetwork = [
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			}
		],
		"name": "claimAndConvert",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_for",
				"type": "address"
			}
		],
		"name": "claimAndConvertFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			}
		],
		"name": "convert",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_for",
				"type": "address"
			}
		],
		"name": "convertFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_for",
				"type": "address"
			},
			{
				"name": "_block",
				"type": "uint256"
			},
			{
				"name": "_nonce",
				"type": "uint256"
			},
			{
				"name": "_v",
				"type": "uint8"
			},
			{
				"name": "_r",
				"type": "bytes32"
			},
			{
				"name": "_s",
				"type": "bytes32"
			}
		],
		"name": "convertForPrioritized",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_for",
				"type": "address"
			},
			{
				"name": "_block",
				"type": "uint256"
			},
			{
				"name": "_v",
				"type": "uint8"
			},
			{
				"name": "_r",
				"type": "bytes32"
			},
			{
				"name": "_s",
				"type": "bytes32"
			}
		],
		"name": "convertForPrioritized2",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_for",
				"type": "address"
			},
			{
				"name": "_customVal",
				"type": "uint256"
			},
			{
				"name": "_block",
				"type": "uint256"
			},
			{
				"name": "_v",
				"type": "uint8"
			},
			{
				"name": "_r",
				"type": "bytes32"
			},
			{
				"name": "_s",
				"type": "bytes32"
			}
		],
		"name": "convertForPrioritized3",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			},
			{
				"name": "_register",
				"type": "bool"
			}
		],
		"name": "registerEtherToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_registry",
				"type": "address"
			}
		],
		"name": "setRegistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_signerAddress",
				"type": "address"
			}
		],
		"name": "setSignerAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_toBlockchain",
				"type": "bytes32"
			},
			{
				"name": "_to",
				"type": "bytes32"
			},
			{
				"name": "_conversionId",
				"type": "uint256"
			}
		],
		"name": "xConvert",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			},
			{
				"name": "_minReturn",
				"type": "uint256"
			},
			{
				"name": "_toBlockchain",
				"type": "bytes32"
			},
			{
				"name": "_to",
				"type": "bytes32"
			},
			{
				"name": "_conversionId",
				"type": "uint256"
			},
			{
				"name": "_block",
				"type": "uint256"
			},
			{
				"name": "_v",
				"type": "uint8"
			},
			{
				"name": "_r",
				"type": "bytes32"
			},
			{
				"name": "_s",
				"type": "bytes32"
			}
		],
		"name": "xConvertPrioritized",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_registry",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_prevOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "OwnerUpdate",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_CONVERTER_FACTORY",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_CONVERTER_UPGRADER",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_FORMULA",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_GAS_PRICE_LIMIT",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_NETWORK",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_X",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BANCOR_X_UPGRADER",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BNT_CONVERTER",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "BNT_TOKEN",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CONTRACT_FEATURES",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CONTRACT_REGISTRY",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "conversionHashes",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CONVERTER_CONVERSION_WHITELIST",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "etherTokens",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_path",
				"type": "address[]"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getReturnByPath",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "NON_STANDARD_TOKEN_REGISTRY",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "registry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "signerAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export const ERC20Bytes32ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "bytes32"
			},
			{
				"name": "_decimals",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_who",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export const ABIBancorGasPriceLimit = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_gasPrice",
				"type": "uint256"
			}
		],
		"name": "validateGasPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_gasPrice",
				"type": "uint256"
			}
		],
		"name": "setGasPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "gasPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_gasPrice",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_prevOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "OwnerUpdate",
		"type": "event"
	}
]

export const BYTECODESmartToken = "608060408181019052600981527f546f6b656e20302e31000000000000000000000000000000000000000000000060208201908152905162000044916002916200021a565b5060408051602081019182905260009081905262000065916003916200021a565b5060408051602081019182905260009081905262000086916004916200021a565b506005805460ff600081811661010082900a9081029202199092161790915560065560408051808201909152600381527f302e330000000000000000000000000000000000000000000000000000000000602082019081529051620000ee916009916200021a565b506001600a60006101000a81548160ff0219169083151502179055503480156200011757600080fd5b5060405162001322380380620013228339810160405280516020808301805191015160008054600160a060020a0333811661010084900a90810291021990911617815592840180519094929092019290918491849184911080156200017d575060008251115b15156200018957600080fd5b82516200019e9060039060208601906200021a565b508151620001b49060049060208501906200021a565b506005805460ff92831660006101000a90810293021916919091179055505060408051600160a060020a0330811616815290517ff4cd1f8571e8d9c97ffcb81558807ab73f9803d54de5da6a0420593c82a4a9f09160200181900390a1505050620002bf565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200025d57805160ff19168380011785556200028d565b828001600101855582156200028d579182015b828111156200028d57825182559160200191906001019062000270565b506200029b9291506200029f565b5090565b620002bc91905b808211156200029b5760008155600101620002a6565b90565b61105380620002cf6000396000f3006080604052600436106101115763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde038114610116578063095ea7b3146101a05780631608f18f146101de57806318160ddd146101fa57806323b872dd14610222578063313ce5671461025357806354fd4d50146102845780635a3b7e42146102995780635e35359e146102ae57806370a08231146102df57806379ba509714610300578063867904b4146103155780638da5cb5b1461033c57806395d89b4114610379578063a24835d11461038e578063a9059cbb146103b5578063bef97c87146103dc578063d4ee1d90146103f1578063dd62ed3e14610406578063f2fde38b14610430575b600080fd5b34801561012257600080fd5b5061012b610451565b6040516020808201828103835283518152835183929182019185019080838360005b8381101561016557818101518382015260200161014d565b50505050905090810190601f1680156101925780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101ac57600080fd5b506101c760048035600160a060020a031690602001356104dd565b604080519115151515825251602090910181900390f35b3480156101ea57600080fd5b506101f860043515156105d5565b005b34801561020657600080fd5b5061020f610627565b6040805191825251602090910181900390f35b34801561022e57600080fd5b506101c7600160a060020a03600480358216916020918201803590911691013561062d565b34801561025f57600080fd5b50610268610664565b604051808260ff1660ff16815260200191505060405180910390f35b34801561029057600080fd5b5061012b610675565b3480156102a557600080fd5b5061012b6106ce565b3480156102ba57600080fd5b506101f8600160a060020a036004803582169160209182018035909116910135610724565b3480156102eb57600080fd5b5061020f600160a060020a036004351661085c565b34801561030c57600080fd5b506101f861086e565b34801561032157600080fd5b506101f860048035600160a060020a03169060200135610944565b34801561034857600080fd5b50610351610aa1565b6040518082600160a060020a0316600160a060020a0316815260200191505060405180910390f35b34801561038557600080fd5b5061012b610ab9565b34801561039a57600080fd5b506101f860048035600160a060020a03169060200135610b12565b3480156103c157600080fd5b506101c760048035600160a060020a03169060200135610c37565b3480156103e857600080fd5b506101c7610c6c565b3480156103fd57600080fd5b50610351610c7d565b34801561041257600080fd5b5061020f60048035600160a060020a03908116916020013516610c94565b34801561043c57600080fd5b506101f8600160a060020a0360043516610cb1565b600380546040805160206002600180861615610100020390941693909304601f810184900484028401820190925281815292918301828280156104d55780601f106104aa576101008083540402835291602001916104d5565b820191906000526020600020905b8154815290600101906020018083116104b857829003601f168201915b505050505081565b6000826000600160a060020a031681600160a060020a03161415151561050257600080fd5b826000148061055957506008600033600160a060020a0316600160a060020a03168152602001908152602001600020600085600160a060020a0316600160a060020a03168152602001908152602001600020546000145b151561056457600080fd5b600160a060020a033381168082166000908152600860208083019182528181018084208a8716968716855290925291208690556040805187815290517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929190910181900390a35060019392505050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561060957600080fd5b8015600a60006101000a81548160ff02191690831515021790555050565b60065481565b6000600a60009054906101000a900460ff16151561064757fe5b610652848484610d44565b151561065a57fe5b5060019392505050565b60055460006101000a900460ff1681565b600980546040805160206002600180861615610100020390941693909304601f810184900484028401820190925281815292918301828280156104d55780601f106104aa576101008083540402835291602001916104d5565b600280546040805160206001808516156101000203909316849004601f810184900484028401820190925281815292918301828280156104d55780601f106104aa576101008083540402835291602001916104d5565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561075857600080fd5b826000600160a060020a031681600160a060020a03161415151561077b57600080fd5b826000600160a060020a031681600160a060020a03161415151561079e57600080fd5b8330600160a060020a031681600160a060020a0316141515156107c057600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b15801561083c57600080fd5b505af1158015610850573d6000803e3d6000fd5b50505050505050505050565b60076020526000908152604090205481565b600160009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156108a357600080fd5b600160009054906101000a9004600160a060020a0316600160a060020a03166000809054906101000a9004600160a060020a0316600160a060020a03167f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a60405160405180910390a36001805460008054600160a060020a0361010083900a9384900481168116840281850219928316178355845492169092029116179055565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561097857600080fd5b816000600160a060020a031681600160a060020a03161415151561099b57600080fd5b8230600160a060020a031681600160a060020a0316141515156109bd57600080fd5b6006546109d0908463ffffffff610ec916565b600655600160a060020a038085161660009081526007602080830191825201902054610a02908463ffffffff610ec916565b6007600086600160a060020a0316600160a060020a03168152602001908152602001600020819055507f9386c90217c323f58030f9dadcbc938f807a940f4ff41cd4cead9562f5da7dc3836040518082815260200191505060405180910390a183600160a060020a031630600160a060020a0316600080516020611008833981519152856040518082815260200191505060405180910390a350505050565b6000809054906101000a9004600160a060020a031681565b600480546040805160206002600180861615610100020390941693909304601f810184900484028401820190925281815292918301828280156104d55780601f106104aa576101008083540402835291602001916104d5565b81600160a060020a031633600160a060020a03161480610b5757506000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316145b1515610b6257600080fd5b610b9a816007600085600160a060020a0316600160a060020a0316815260200190815260200160002054610ee490919063ffffffff16565b600160a060020a038084161660009081526007602080830191825201902055600654610bcc908263ffffffff610ee416565b600655604080518281529051600160a060020a0330811692908516916000805160206110088339815191529160200181900390a36040805182815290517f9a1b418bc061a5d80270261562e6986a35d995f8051145f277be16103abd34539160200181900390a15050565b6000600a60009054906101000a900460ff161515610c5157fe5b610c5b8383610efb565b1515610c6357fe5b50600192915050565b600a5460006101000a900460ff1681565b60015460006101000a9004600160a060020a031681565b600860209081526000928352604080842090915290825290205481565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515610ce557600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a031681600160a060020a031614151515610d1a57600080fd5b80600160006101000a815481600160a060020a030219169083600160a060020a0316021790555050565b6000836000600160a060020a031681600160a060020a031614151515610d6957600080fd5b836000600160a060020a031681600160a060020a031614151515610d8c57600080fd5b600160a060020a038087168116600090815260086020808301918252810180832033851690941683529290522054610dca908563ffffffff610ee416565b600160a060020a03808816811660008181526008602080830191825281018083203386169095168352938152838220949094559081526007909252902054610e18908563ffffffff610ee416565b600160a060020a0380881681166000908152600760208083018281529081018084209590955589841690931682529091522054610e5b908563ffffffff610ec916565b6007600087600160a060020a0316600160a060020a031681526020019081526020016000208190555084600160a060020a031686600160a060020a0316600080516020611008833981519152866040518082815260200191505060405180910390a350600195945050505050565b6000828201838110151515610edd57600080fd5b9392505050565b6000818310151515610ef557600080fd5b50900390565b6000826000600160a060020a031681600160a060020a031614151515610f2057600080fd5b610f58836007600033600160a060020a0316600160a060020a0316815260200190815260200160002054610ee490919063ffffffff16565b600160a060020a0333811681166000908152600760208083018281529081018084209590955588841690931682529091522054610f9b908463ffffffff610ec916565b6007600086600160a060020a0316600160a060020a031681526020019081526020016000208190555083600160a060020a031633600160a060020a0316600080516020611008833981519152856040518082815260200191505060405180910390a350600193925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820a01cd5e7129251150926eb7709cd67fb14605fc3b45a712a9e9a486873c075fb0029"



export const BYTECODEConverter = "6004805460146101000a61ffff81810219909216600d90921602179055608060408181019052600681527f62616e636f7200000000000000000000000000000000000000000000000000006020820190815290516200006191600591620007bb565b5060068054600061010081810a60ff8181021990941660018015158381029290921790840a86810219919091168515159190910217909555600b805463ffffffff80840219909116948116928302949094176004840a8086021991909116908302176008840a94850219169190930217600c90910a928302191691909202179055348015620000ef57600080fd5b5060405160a08062005e7983398101604052805160209182018051908301805190840180519401516000805461010082900a600160a060020a0381810219909216338316919091021782559495939492939286908190808416908216141515156200015957600080fd5b5060028054600160a060020a03928316600061010081900a918202858302199384161790935560038054338616909202919092161790558691828116911614151515620001a557600080fd5b8460008163ffffffff1610158015620001d15750620f424067ffffffffffffffff168163ffffffff1611155b1515620001dd57600080fd5b86600760006101000a815481600160a060020a030219169083600160a060020a0316021790555086600660026101000a815481600160a060020a030219169083600160a060020a03160217905550600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c7f436f6e74726163744665617475726573000000000000000000000000000000006040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015620002cb57600080fd5b505af1158015620002e0573d6000803e3d6000fd5b505050506040513d6020811015620002f757600080fd5b505192506000600160a060020a039081169084161415156200039d5782600160a060020a0316632c7077c06001806040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018215151515815260200192505050600060405180830381600087803b1580156200038357600080fd5b505af115801562000398573d6000803e3d6000fd5b505050505b85600b60046101000a81548163ffffffff021916908363ffffffff1602179055506000600160a060020a031685600160a060020a0316141515620003f257620003f28585600064010000000062000400810204565b505050505050505062000860565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156200043557600080fd5b30600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b158015620004ac57600080fd5b505af1158015620004c1573d6000803e3d6000fd5b505050506040513d6020811015620004d857600080fd5b5051600160a060020a031614151515620004f157600080fd5b826000600160a060020a031681600160a060020a0316141515156200051557600080fd5b8330600160a060020a031681600160a060020a0316141515156200053857600080fd5b8360008163ffffffff161180156200055f5750620f424063ffffffff168163ffffffff1611155b15156200056b57600080fd5b600254600160a060020a0387811660006101000a90920481161614158015620005c75750600a600087600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff16155b8015620005ee5750600b5463ffffffff620f4240811660006101000a909204811687011611155b1515620005fa57600080fd5b6000600a600088600160a060020a0316600160a060020a031681526020019081526020016000206000018190555084600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160006101000a81548163ffffffff021916908363ffffffff16021790555083600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160046101000a81548160ff0219169083151502179055506001600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160056101000a81548160ff0219169083151502179055506001600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160066101000a81548160ff02191690831515021790555060098690806001815401808255809150509060018203906000526020600020016000909192909190916101000a815481600160a060020a030219169083600160a060020a031602179055505084600b60008282829054906101000a900463ffffffff160192506101000a81548163ffffffff021916908363ffffffff160217905550505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620007fe57805160ff19168380011785556200082e565b828001600101855582156200082e579182015b828111156200082e57825182559160200191906001019062000811565b506200083c92915062000840565b5090565b6200085d91905b808211156200083c576000815560010162000847565b90565b61560980620008706000396000f3006080604052600436106102f25763ffffffff60e060020a6000350416630c87355e81146102f75780630ca78923146103275780630e53aae91461036457806319b64015146103cf5780631d000b611461040f5780631e1401f81461042457806320d7d3671461046d57806321e6b53d1461049957806322742564146104ba578063228d28201461054757806325f9bfef146105615780632a2e2f0c1461057657806338a5e016146105ad5780633aa0145a146105c25780633e8ff43f146105e35780633f4d2fc21461066d578063415f1240146106a257806341a5b33d146106ba57806342906029146106eb578063481c6a751461070057806349d10b64146107155780634af80f0e1461072a578063500573511461074b57806354fd4d50146107d2578063579cd3ca146108055780635a46f06c1461083c5780635e35359e146108515780635e5144eb1461088257806361cd756e146108b957806362614ae6146108ce5780636d7bd3fc146108e357806371f52bf3146108f857806372b44b2c1461090d57806375892cf11461093457806379ba50971461096b5780637b1039991461098057806383315b6e1461099557806385d5e631146109aa5780638b34839f146109c45780638da5cb5b146109d95780638e3047e0146109ee5780639232494e14610a1f5780639249993a14610a3457806392d1abb714610a4957806394c275ad14610a5e5780639e56855314610a73578063a2c4c33614610a9c578063ad374f5b14610ac3578063b4a176d314610add578063bf75455814610af2578063c45d3d9214610b07578063c4a8598e14610b1c578063c8c2fe6c14610b31578063ca1d209d14610b46578063cc97b38f14610b5e578063d4ee1d9014610b73578063d55ec69714610b88578063d895951214610b9d578063e4edf85214610bbe578063ecbca55d14610bdf578063f0843ba914610bfd578063f2fde38b14610c58578063f5286b9c14610c79578063fa1c594e14610c8e578063fc0c546a14610ca8578063fe417fa514610cbd575b600080fd5b34801561030357600080fd5b5061030c610ce4565b60408051600019928316909216825251602090910181900390f35b34801561033357600080fd5b5061036260048035600160a060020a0316906020908101803563ffffffff169190810180351515910135610cf6565b005b34801561037057600080fd5b50610385600160a060020a0360043516610e72565b604051808681526020018563ffffffff1663ffffffff1681526020018415151515815260200183151515158152602001821515151581526020019550505050505060405180910390f35b3480156103db57600080fd5b506103e7600435610eba565b6040518082600160a060020a0316600160a060020a0316815260200191505060405180910390f35b34801561041b57600080fd5b5061030c610eeb565b34801561043057600080fd5b50610455600160a060020a036004803582169160209182018035909116910135610f0f565b60408051928352602092830191825251910181900390f35b34801561047957600080fd5b50610482610fa8565b604080519115151515825251602090910181900390f35b3480156104a557600080fd5b50610362600160a060020a0360043516610fb9565b610534600480360381019080803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949750508435955050506020928301803593908101803593508101803560ff16925081018035600019908116929190910135166110c5565b6040805191825251602090910181900390f35b34801561055357600080fd5b50610362600435151561140b565b34801561056d57600080fd5b5061030c6114e7565b34801561058257600080fd5b50610534600160a060020a03600480358216916020918201803590911691908101803591013561150b565b3480156105b957600080fd5b50610362611950565b3480156105ce57600080fd5b5061053460048035906020013560ff166119f1565b3480156105ef57600080fd5b506105f8611a5b565b6040516020808201828103835283518152835183929182019185019080838360005b8381101561063257818101518382015260200161061a565b50505050905090810190601f16801561065f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561067957600080fd5b5061036260048035600160a060020a0316906020908101803563ffffffff169101351515611ae7565b3480156106ae57600080fd5b50610362600435611e7d565b3480156106c657600080fd5b50610362600160a060020a0360048035821691602091820180359091169101356120e9565b3480156106f757600080fd5b506103e76121c3565b34801561070c57600080fd5b506103e76121da565b34801561072157600080fd5b506103626121f1565b34801561073657600080fd5b50610362600160a060020a036004351661239f565b34801561075757600080fd5b50610534600480360381019080803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843750949750508435955050506020928301803593908101803593508101803560ff1692508101803560001990811692919091013516612420565b3480156107de57600080fd5b506107e761292b565b604051808261ffff1661ffff16815260200191505060405180910390f35b34801561081157600080fd5b5061081a61293d565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b34801561084857600080fd5b5061030c612951565b34801561085d57600080fd5b50610362600160a060020a036004803582169160209182018035909116910135612975565b34801561088e57600080fd5b50610534600160a060020a036004803582169160209182018035909116919081018035910135612b29565b3480156108c557600080fd5b506103e7612b40565b3480156108da57600080fd5b5061030c612b57565b3480156108ef57600080fd5b5061030c612b7b565b34801561090457600080fd5b506107e7612b8d565b34801561091957600080fd5b5061045560048035600160a060020a03169060200135612b94565b34801561094057600080fd5b50610534600160a060020a036004803582169160209182018035909116919081018035910135612e97565b34801561097757600080fd5b50610362612f88565b34801561098c57600080fd5b506103e761305e565b3480156109a157600080fd5b5061030c613075565b3480156109b657600080fd5b506103626004351515613099565b3480156109d057600080fd5b5061048261314a565b3480156109e557600080fd5b506103e761315b565b3480156109fa57600080fd5b50610455600160a060020a036004803582169160209182018035909116910135613173565b348015610a2b57600080fd5b5061030c6134b2565b348015610a4057600080fd5b5061030c6134c4565b348015610a5557600080fd5b506105346134e8565b348015610a6a57600080fd5b5061081a6134ed565b348015610a7f57600080fd5b5061036260048035600160a060020a031690602001351515613501565b348015610aa857600080fd5b5061045560048035600160a060020a031690602001356135bd565b348015610acf57600080fd5b506103626004351515613890565b348015610ae957600080fd5b506103626138e1565b348015610afe57600080fd5b5061048261399f565b348015610b1357600080fd5b506103e76139b0565b348015610b2857600080fd5b5061030c6139c7565b348015610b3d57600080fd5b506103626139eb565b348015610b5257600080fd5b50610362600435613aab565b348015610b6a57600080fd5b5061030c613d40565b348015610b7f57600080fd5b506103e7613d64565b348015610b9457600080fd5b50610362613d7b565b348015610ba957600080fd5b50610534600160a060020a0360043516613edd565b348015610bca57600080fd5b50610362600160a060020a0360043516613ff9565b348015610beb57600080fd5b5061036263ffffffff600435166140af565b6105346004803603810190808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509497505084359550505060209092013591506141e39050565b348015610c6457600080fd5b50610362600160a060020a03600435166141f7565b348015610c8557600080fd5b5061030c61428a565b348015610c9a57600080fd5b5061036260043515156142ae565b348015610cb457600080fd5b506103e7614331565b348015610cc957600080fd5b5061036260048035600160a060020a03169060200135614348565b60008051602061559e83398151915281565b60008060009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515610d2c57600080fd5b84600a600082600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff161515610d6e57600080fd5b8460008163ffffffff16118015610d945750620f424063ffffffff168163ffffffff1611155b1515610d9f57600080fd5b600a600088600160a060020a0316600160a060020a031681526020019081526020016000209250620f424063ffffffff16868460010160009054906101000a900463ffffffff16600b60009054906101000a900463ffffffff16030163ffffffff1611151515610e0e57600080fd5b5050600181018054600b805463ffffffff600061010081810a9586900483168685048416038b018316860283870219948516179094558554981515600490940a93840260ff9094021991909916909302961695909517169390931790925591015550565b600a60205260009081526040812080820154600190910154909163ffffffff61010091820a8304169160ff6004830a82048116926005810a8304821692600690910a90041685565b600981815481101515610ec957fe5b906000526020600020016000915054906101000a9004600160a060020a031681565b7f424e54546f6b656e00000000000000000000000000000000000000000000000081565b60008083600160a060020a031685600160a060020a031614151515610f3357600080fd5b600254600160a060020a0385811660006101000a9092048116161415610f6657610f5d85846135bd565b91509150610fa0565b600254600160a060020a0386811660006101000a9092048116161415610f9057610f5d8484612b94565b610f9b858585613173565b915091505b935093915050565b60065460006101000a900460ff1681565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515610fed57600080fd5b6000600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061559e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b15801561106357600080fd5b505af1158015611077573d6000803e3d6000fd5b505050506040513d602081101561108d57600080fd5b5051600080549192506101000a9004600160a060020a0390811681169082161415156110b857600080fd5b6110c18261453c565b5050565b60008060008960008151811015156110d957fe5b906020019060200201519150600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061557e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b15801561115957600080fd5b505af115801561116d573d6000803e3d6000fd5b505050506040513d602081101561118357600080fd5b5051905060003414156112e157600254600160a060020a0383811660006101000a90920481161614156112d557600260009054906101000a9004600160a060020a0316600160a060020a031663a24835d1338b6040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b15801561122857600080fd5b505af115801561123c573d6000803e3d6000fd5b50505050600260009054906101000a9004600160a060020a0316600160a060020a031663867904b4828b6040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156112b857600080fd5b505af11580156112cc573d6000803e3d6000fd5b505050506112e1565b6112e18233838c6145e0565b80600160a060020a031663b406d386348c8c8c338f8e8e8e8e6040518b63ffffffff1660e060020a02815260040180806020018a815260200189815260200188600160a060020a0316600160a060020a031681526020018781526020018681526020018560ff1660ff1681526020018460001916600019168152602001836000191660001916815260200182810382528b818151815260200191508051906020019060200280838360005b838110156113a457818101518382015260200161138c565b505050509050019a50505050505050505050506020604051808303818588803b1580156113d057600080fd5b505af11580156113e4573d6000803e3d6000fd5b50505050506040513d60208110156113fb57600080fd5b50519a9950505050505050505050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614806114655750600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316145b151561147057600080fd5b600b5460ff600c6101000a90910416151581151514156114e457600b805460ff600c6101000a81810219909216841515158302179283905560408051929093041615151515815290517fb8e670608a57255ce4f35952b324cba70211a4200a91ce81d26e06d488c1f66b9160200181900390a15b50565b7f436f6e747261637452656769737472790000000000000000000000000000000081565b6000806000806000806000600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061557e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b15801561158a57600080fd5b505af115801561159e573d6000803e3d6000fd5b505050506040513d60208110156115b457600080fd5b5051905033600160a060020a039081169082161415156115d357600080fd5b600b54600c6101000a900460ff1615156115e957fe5b876000811115156115f957600080fd5b8a600160a060020a03168c600160a060020a03161415151561161a57600080fd5b600254600160a060020a038c811660006101000a909204811616141561164c576116458c8b8b614967565b9750611941565b600254600160a060020a038d811660006101000a9092048116161415611677576116458b8b8b614b91565b6116828c8c8c613173565b9097509550600087141580156116985750888710155b15156116a357600080fd5b600a60008d600160a060020a0316600160a060020a0316815260200190815260200160002094508460010160049054906101000a900460ff16156116fc5760008501546116f6908b63ffffffff614f1416565b60008601555b600a60008c600160a060020a0316600160a060020a0316815260200190815260200160002093508360010160049054906101000a900460ff161561175557600084015461174f908863ffffffff614f3316565b60008501555b61175e8b613edd565b9250828710151561176b57fe5b6117778c33308d6145e0565b6117828b3389614f4a565b61178f8c8c8c8a8a6152b5565b8b600160a060020a03166000805160206155be833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156117fb57600080fd5b505af115801561180f573d6000803e3d6000fd5b505050506040513d602081101561182557600080fd5b50516118308f613edd565b600189015460408051938452602093840192835260006101000a90910463ffffffff90811681161691830191825251910181900390a28a600160a060020a03166000805160206155be833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156118d257600080fd5b505af11580156118e6573d6000803e3d6000fd5b505050506040513d60208110156118fc57600080fd5b50516119078e613edd565b600188015460408051938452602093840192835260006101000a90910463ffffffff90811681161691830191825251910181900390a28697505b50505050505050949350505050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561198457600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166379ba50976040518163ffffffff1660e060020a028152600401600060405180830381600087803b1580156119d757600080fd5b505af11580156119eb573d6000803e3d6000fd5b50505050565b6000611a548260ff16620f42400a67ffffffffffffffff16611a488460ff16600b60089054906101000a900463ffffffff1663ffffffff16620f4240030a67ffffffffffffffff168661534d90919063ffffffff16565b9063ffffffff61537f16565b9392505050565b600580546040805160206002600180861615610100020390941693909304601f81018490048402840182019092528181529291830182828015611adf5780601f10611ab457610100808354040283529160200191611adf565b820191906000526020600020905b815481529060010190602001808311611ac257829003601f168201915b505050505081565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515611b1b57600080fd5b30600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611b7857600080fd5b505af1158015611b8c573d6000803e3d6000fd5b505050506040513d6020811015611ba257600080fd5b5051600160a060020a031614151515611bba57600080fd5b826000600160a060020a031681600160a060020a031614151515611bdd57600080fd5b8330600160a060020a031681600160a060020a031614151515611bff57600080fd5b8360008163ffffffff16118015611c255750620f424063ffffffff168163ffffffff1611155b1515611c3057600080fd5b600254600160a060020a0387811660006101000a90920481161614158015611c8b5750600a600087600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff16155b8015611cb15750600b5463ffffffff620f4240811660006101000a909204811687011611155b1515611cbc57600080fd5b6000600a600088600160a060020a0316600160a060020a031681526020019081526020016000206000018190555084600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160006101000a81548163ffffffff021916908363ffffffff16021790555083600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160046101000a81548160ff0219169083151502179055506001600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160056101000a81548160ff0219169083151502179055506001600a600088600160a060020a0316600160a060020a0316815260200190815260200160002060010160066101000a81548160ff02191690831515021790555060098690806001815401808255809150509060018203906000526020600020016000909192909190916101000a815481600160a060020a030219169083600160a060020a031602179055505084600b60008282829054906101000a900463ffffffff160192506101000a81548163ffffffff021916908363ffffffff160217905550505050505050565b600080600080600080620f424063ffffffff16600b60009054906101000a900463ffffffff1663ffffffff16141515611eb557600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611f0857600080fd5b505af1158015611f1c573d6000803e3d6000fd5b505050506040513d6020811015611f3257600080fd5b50516002546040805163a24835d163ffffffff811660e060020a028252600160a060020a033381168116600490930192835260209283018d81529351959b50600061010081900a909504811616949093929091019190808303818387803b158015611f9c57600080fd5b505af1158015611fb0573d6000803e3d6000fd5b50505050600091505b60095461ffff831610156120e05760098261ffff16815481101515611fda57fe5b9060005260206000200160009054906101000a9004600160a060020a0316945061200385613edd565b935061201986611a48898763ffffffff61534d16565b9250600a600086600160a060020a0316600160a060020a0316815260200190815260200160002090508060010160049054906101000a900460ff161561207457600081015461206e908463ffffffff614f3316565b60008201555b61207f853385614f4a565b6001810154604080518989038152858703602091820190815260006101000a90930463ffffffff9081168116169281019283529051600160a060020a038816926000805160206155be833981519152920181900390a2600190910190611fb9565b50505050505050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561211d57600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a0316635e35359e8484846040518463ffffffff1660e060020a0281526004018084600160a060020a0316600160a060020a0316815260200183600160a060020a0316600160a060020a031681526020018281526020019350505050600060405180830381600087803b1580156121af57600080fd5b505af11580156120e0573d6000803e3d6000fd5b60045460006101000a9004600160a060020a031681565b60035460006101000a9004600160a060020a031681565b6000600660009054906101000a900460ff168061223357506000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316145b151561223e57600080fd5b600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c7f436f6e74726163745265676973747279000000000000000000000000000000006040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b1580156122c457600080fd5b505af11580156122d8573d6000803e3d6000fd5b505050506040513d60208110156122ee57600080fd5b5051600754909150600160a060020a0380831660006101000a9092048116161415801561232e57506000600160a060020a031681600160a060020a031614155b151561233957600080fd5b600760009054906101000a9004600160a060020a0316600660026101000a815481600160a060020a030219169083600160a060020a0316021790555080600760006101000a815481600160a060020a030219169083600160a060020a0316021790555050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156123d357600080fd5b8030600160a060020a031681600160a060020a0316141515156123f557600080fd5b81600860006101000a815481600160a060020a030219169083600160a060020a031602179055505050565b600080600080600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c7f42616e636f7258000000000000000000000000000000000000000000000000006040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b1580156124ac57600080fd5b505af11580156124c0573d6000803e3d6000fd5b505050506040513d60208110156124d657600080fd5b50516007546040805163bb34534c63ffffffff811660e060020a02825260008051602061557e833981519152600080199182169091166004909301928352925194975061010083900a909304600160a060020a03908116169360209182019281840390829087803b15801561254a57600080fd5b505af115801561255e573d6000803e3d6000fd5b505050506040513d602081101561257457600080fd5b50516007546040805163bb34534c63ffffffff811660e060020a0282527f424e54546f6b656e000000000000000000000000000000000000000000000000600080199182169091166004909301928352925194965061010083900a909304600160a060020a03908116169360209182019281840390829087803b1580156125fa57600080fd5b505af115801561260e573d6000803e3d6000fd5b505050506040513d602081101561262457600080fd5b50518b51600160a060020a03909116908c906000908110151561264357fe5b90602001906020020151600160a060020a031614151561266257600080fd5b82600160a060020a031663aafd6b768a336040518363ffffffff1660e060020a0281526004018083815260200182600160a060020a0316600160a060020a0316815260200192505050602060405180830381600087803b1580156126c557600080fd5b505af11580156126d9573d6000803e3d6000fd5b505050506040513d60208110156126ef57600080fd5b50516002546040805163a24835d163ffffffff811660e060020a028252600160a060020a033381168116600490930192835260209283018681529351959650600061010081900a909504811616949093929091019190808303818387803b15801561275957600080fd5b505af115801561276d573d6000803e3d6000fd5b50505050600260009054906101000a9004600160a060020a0316600160a060020a031663867904b483836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156127e957600080fd5b505af11580156127fd573d6000803e3d6000fd5b5050505081600160a060020a031663b406d3868c838d338e8e8e8e8e6040518a63ffffffff1660e060020a02815260040180806020018a815260200189815260200188600160a060020a0316600160a060020a031681526020018781526020018681526020018560ff1660ff1681526020018460001916600019168152602001836000191660001916815260200182810382528b818151815260200191508051906020019060200280838360005b838110156128c35781810151838201526020016128ab565b505050509050019a5050505050505050505050602060405180830381600087803b1580156128f057600080fd5b505af1158015612904573d6000803e3d6000fd5b505050506040513d602081101561291a57600080fd5b50519b9a5050505050505050505050565b60045460146101000a900461ffff1681565b600b5460086101000a900463ffffffff1681565b7f42616e636f72436f6e766572746572466163746f72790000000000000000000081565b6000600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061559e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b1580156129eb57600080fd5b505af11580156129ff573d6000803e3d6000fd5b505050506040513d6020811015612a1557600080fd5b5051600160a060020a03858116166000908152600a60208083019182520190206001015490915060066101000a900460ff161580612ae3575030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612aab57600080fd5b505af1158015612abf573d6000803e3d6000fd5b505050506040513d6020811015612ad557600080fd5b5051600160a060020a031614155b80612b13575080600160a060020a03166000809054906101000a9004600160a060020a0316600160a060020a0316145b1515612b1e57600080fd5b6119eb8484846153a5565b6000612b378585858561150b565b95945050505050565b60065460026101000a9004600160a060020a031681565b7f424e54436f6e766572746572000000000000000000000000000000000000000081565b60008051602061555e83398151915281565b6009545b90565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612bfd57600080fd5b505af1158015612c11573d6000803e3d6000fd5b505050506040513d6020811015612c2757600080fd5b5051600160a060020a0316141515612c3e57600080fd5b89600a600082600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff161515612c8057600080fd5b600a60008c600160a060020a0316600160a060020a031681526020019081526020016000209650600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612cfa57600080fd5b505af1158015612d0e573d6000803e3d6000fd5b505050506040513d6020811015612d2457600080fd5b50519550612d318b613edd565b9450600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061555e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b158015612da757600080fd5b505af1158015612dbb573d6000803e3d6000fd5b505050506040513d6020811015612dd157600080fd5b50516001880154604080516349f9b0f763ffffffff81811660e060020a02835260049092018b815260209081018b8152600061010081900a909604841684169093169281019283529182018f81529251949850600160a060020a0389169490939282019281840390829087803b158015612e4a57600080fd5b505af1158015612e5e573d6000803e3d6000fd5b505050506040513d6020811015612e7457600080fd5b50519250612e838360016119f1565b9b928c90039a509198505050505050505050565b600060606040519081016040528086600160a060020a0316600160a060020a03168152602001600260009054906101000a9004600160a060020a0316600160a060020a0316600160a060020a0316815260200185600160a060020a0316600160a060020a0316815250600c906003612f109291906154c4565b50612b37600c805480602002602001604051908101604052809291908181526020018280548015612f7c57602002820191906000526020600020905b8160009054906101000a9004600160a060020a0316600160a060020a031681526020019060010190808311612f4c575b505050505084846141e3565b600160009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515612fbd57600080fd5b600160009054906101000a9004600160a060020a0316600160a060020a03166000809054906101000a9004600160a060020a0316600160a060020a03167f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a60405160405180910390a36001805460008054600160a060020a0361010083900a9384900481168116840281850219928316178355845492169092029116179055565b60075460006101000a9004600160a060020a031681565b7f436f6e747261637446656174757265730000000000000000000000000000000081565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156130cd57600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a0316631608f18f826040518263ffffffff1660e060020a0281526004018082151515158152602001915050600060405180830381600087803b15801561312f57600080fd5b505af1158015613143573d6000803e3d6000fd5b5050505050565b60065460016101000a900460ff1681565b6000809054906101000a9004600160a060020a031681565b600080600080600080600030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156131db57600080fd5b505af11580156131ef573d6000803e3d6000fd5b505050506040513d602081101561320557600080fd5b5051600160a060020a031614151561321c57600080fd5b89600a600082600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff16151561325e57600080fd5b89600a600082600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff1615156132a057600080fd5b600a60008d600160a060020a0316600160a060020a031681526020019081526020016000209650600a60008c600160a060020a0316600160a060020a0316815260200190815260200160002095508660010160059054906101000a900460ff16151561330b57600080fd5b600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061555e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b15801561337f57600080fd5b505af1158015613393573d6000803e3d6000fd5b505050506040513d60208110156133a957600080fd5b50519450600160a060020a0385166365098bb36133c58e613edd565b60018a015460006101000a900463ffffffff166133e18f613edd565b8a60010160009054906101000a900463ffffffff168f6040518663ffffffff1660e060020a028152600401808681526020018563ffffffff1663ffffffff1681526020018481526020018363ffffffff1663ffffffff16815260200182815260200195505050505050602060405180830381600087803b15801561346457600080fd5b505af1158015613478573d6000803e3d6000fd5b505050506040513d602081101561348e57600080fd5b5051935061349d8460026119f1565b9c938d90039b50929950505050505050505050565b60008051602061557e83398151915281565b7f42616e636f7247617350726963654c696d69740000000000000000000000000081565b600181565b600b5460046101000a900463ffffffff1681565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561353557600080fd5b81600a600082600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff16151561357757600080fd5b8115600a600085600160a060020a0316600160a060020a0316815260200190815260200160002060010160056101000a81548160ff021916908315150217905550505050565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561362657600080fd5b505af115801561363a573d6000803e3d6000fd5b505050506040513d602081101561365057600080fd5b5051600160a060020a031614151561366757600080fd5b89600a600082600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff1615156136a957600080fd5b600a60008c600160a060020a0316600160a060020a0316815260200190815260200160002096508660010160059054906101000a900460ff1615156136ed57600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561374057600080fd5b505af1158015613754573d6000803e3d6000fd5b505050506040513d602081101561376a57600080fd5b505195506137778b613edd565b9450600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061555e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b1580156137ed57600080fd5b505af1158015613801573d6000803e3d6000fd5b505050506040513d602081101561381757600080fd5b50516001880154604080516329a00e7c63ffffffff81811660e060020a02835260049092018b815260209081018b8152600061010081900a909604841684169093169281019283529182018f81529251949850600160a060020a0389169490939282019281840390829087803b158015612e4a57600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156138c457600080fd5b80600660016101000a81548160ff02191690831515021790555050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316148061393b5750600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316145b151561394657600080fd5b600660029054906101000a9004600160a060020a0316600760006101000a815481600160a060020a030219169083600160a060020a031602179055506000600660006101000a81548160ff021916908315150217905550565b600b54600c6101000a900460ff1681565b60085460006101000a9004600160a060020a031681565b7f42616e636f72580000000000000000000000000000000000000000000000000081565b600460009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515613a2057600080fd5b600454600354604051600160a060020a0360006101000a9384900481168116939092048216909116907fbe4cc281795971a471c980e842627a7f1ea3892ddfce8c5b6357cd2611c197329080800390a36004805460038054600160a060020a03600061010081900a948590048216821685028286021993841617909355845492169092029116179055565b600080600080600080620f424063ffffffff16600b60009054906101000a900463ffffffff1663ffffffff16141515613ae357600080fd5b600b54600c6101000a900460ff161515613af957fe5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015613b4c57600080fd5b505af1158015613b60573d6000803e3d6000fd5b505050506040513d6020811015613b7657600080fd5b50519550600091505b60095461ffff83161015613ca75760098261ffff16815481101515613ba057fe5b9060005260206000200160009054906101000a9004600160a060020a03169450613bc985613edd565b9350613bdf86611a48898763ffffffff61534d16565b9250600a600086600160a060020a0316600160a060020a0316815260200190815260200160002090508060010160049054906101000a900460ff1615613c3a576000810154613c34908463ffffffff614f1416565b60008201555b613c46853330866145e0565b6001810154604080518989018152858701602091820190815260006101000a90930463ffffffff9081168116169281019283529051600160a060020a038816926000805160206155be833981519152920181900390a2600190910190613b7f565b600260009054906101000a9004600160a060020a0316600160a060020a031663867904b433896040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b158015613d1f57600080fd5b505af1158015613d33573d6000803e3d6000fd5b5050505050505050505050565b7f42616e636f72585570677261646572000000000000000000000000000000000081565b60015460006101000a9004600160a060020a031681565b60008060009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316141515613db157600080fd5b600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c60008051602061559e8339815191526040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b158015613e2557600080fd5b505af1158015613e39573d6000803e3d6000fd5b505050506040513d6020811015613e4f57600080fd5b50519050613e5c816141f7565b80600160a060020a03166390f58c96600460149054906101000a900461ffff166040518263ffffffff1660e060020a028152600401808261ffff1661ffff168152602001915050600060405180830381600087803b158015613ebd57600080fd5b505af1158015613ed1573d6000803e3d6000fd5b505050506114e4612f88565b60008082600a600082600160a060020a0316600160a060020a0316815260200190815260200160002060010160069054906101000a900460ff161515613f2257600080fd5b600a600085600160a060020a0316600160a060020a0316815260200190815260200160002091508160010160049054906101000a900460ff16613feb5783600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b158015613fba57600080fd5b505af1158015613fce573d6000803e3d6000fd5b505050506040513d6020811015613fe457600080fd5b5051613ff1565b81600001545b949350505050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614806140535750600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316145b151561405e57600080fd5b600354600160a060020a0382811660006101000a9092048116161415151561408557600080fd5b80600460006101000a815481600160a060020a030219169083600160a060020a0316021790555050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614806141095750600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316145b151561411457600080fd5b8060008163ffffffff161015801561414a5750600b60049054906101000a900463ffffffff1663ffffffff168163ffffffff1611155b151561415557600080fd5b7f81cd2ffb37dd237c0e4e2a3de5265fcf9deb43d3e7801e80db9f1ccfba7ee600600b60089054906101000a900463ffffffff1683604051808363ffffffff1663ffffffff1681526020018263ffffffff1663ffffffff1681526020019250505060405180910390a181600b60086101000a81548163ffffffff021916908363ffffffff1602179055505050565b6000613ff1848484848060018102806110c5565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561422b57600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a031681600160a060020a03161415151561426057600080fd5b80600160006101000a815481600160a060020a030219169083600160a060020a0316021790555050565b7f4e6f6e5374616e64617264546f6b656e5265676973747279000000000000000081565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614806143085750600360009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a0316145b151561431357600080fd5b8015600660006101000a81548160ff02191690831515021790555050565b60025460006101000a9004600160a060020a031681565b6000600660019054906101000a900460ff16151561436557600080fd5b600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c7f42616e636f7258000000000000000000000000000000000000000000000000006040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b1580156143eb57600080fd5b505af11580156143ff573d6000803e3d6000fd5b505050506040513d602081101561441557600080fd5b5051905033600160a060020a0390811690821614151561443457600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a031663a24835d184846040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156144ac57600080fd5b505af11580156144c0573d6000803e3d6000fd5b50505050600260009054906101000a9004600160a060020a0316600160a060020a031663867904b433846040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156121af57600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614151561457057600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a031663f2fde38b826040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050600060405180830381600087803b15801561312f57600080fd5b6000806000600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c7f4e6f6e5374616e64617264546f6b656e526567697374727900000000000000006040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b15801561466b57600080fd5b505af115801561467f573d6000803e3d6000fd5b505050506040513d602081101561469557600080fd5b50516040805163aeea10bd63ffffffff811660e060020a028252600160a060020a038b8116811660049093019283529251939650918616926020918201919080830381600087803b1580156146e957600080fd5b505af11580156146fd573d6000803e3d6000fd5b505050506040513d602081101561471357600080fd5b5051156148b65786600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561477557600080fd5b505af1158015614789573d6000803e3d6000fd5b505050506040513d602081101561479f57600080fd5b5051604080516323b872dd63ffffffff811660e060020a028252600160a060020a038a81168116600490930192835289811681166020938401908152830189815293519496508b1693909290910190600090808303818387803b15801561480557600080fd5b505af1158015614819573d6000803e3d6000fd5b5050505086600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561487857600080fd5b505af115801561488c573d6000803e3d6000fd5b505050506040513d60208110156148a257600080fd5b5051905081811115156148b157fe5b6120e0565b86600160a060020a03166323b872dd8787876040518463ffffffff1660e060020a0281526004018084600160a060020a0316600160a060020a0316815260200183600160a060020a0316600160a060020a031681526020018281526020019350505050602060405180830381600087803b15801561493357600080fd5b505af1158015614947573d6000803e3d6000fd5b505050506040513d602081101561495d57600080fd5b505115156120e057fe5b60008060008061497787876135bd565b90935091506000831415801561498d5750848310155b151561499857600080fd5b600a600088600160a060020a0316600160a060020a0316815260200190815260200160002090508060010160049054906101000a900460ff16156149f15760008101546149eb908763ffffffff614f1416565b60008201555b6149fd873330896145e0565b600260009054906101000a9004600160a060020a0316600160a060020a031663867904b433856040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b158015614a7557600080fd5b505af1158015614a89573d6000803e3d6000fd5b50505050614aaf87600260009054906101000a9004600160a060020a03168886866152b5565b86600160a060020a03166000805160206155be833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015614b1b57600080fd5b505af1158015614b2f573d6000803e3d6000fd5b505050506040513d6020811015614b4557600080fd5b5051614b508a613edd565b600185015460408051938452602093840192835260006101000a90910463ffffffff90811681161691830191825251910181900390a2509095945050505050565b600080600080600080600260009054906101000a9004600160a060020a0316600160a060020a03166370a08231336040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b158015614c0a57600080fd5b505af1158015614c1e573d6000803e3d6000fd5b505050506040513d6020811015614c3457600080fd5b50518811151515614c4457600080fd5b614c4e8989612b94565b909550935060008514158015614c645750868510155b1515614c6f57600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015614cc257600080fd5b505af1158015614cd6573d6000803e3d6000fd5b505050506040513d6020811015614cec57600080fd5b50519250614cf989613edd565b915081851080614d1257508185148015614d1257508288145b1515614d1a57fe5b600a60008a600160a060020a0316600160a060020a0316815260200190815260200160002090508060010160049054906101000a900460ff1615614d73576000810154614d6d908663ffffffff614f3316565b60008201555b600260009054906101000a9004600160a060020a0316600160a060020a031663a24835d1338a6040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b158015614deb57600080fd5b505af1158015614dff573d6000803e3d6000fd5b50505050614e0e893387614f4a565b614e30600260009054906101000a9004600160a060020a03168a8a88886152b5565b88600160a060020a03166000805160206155be833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015614e9c57600080fd5b505af1158015614eb0573d6000803e3d6000fd5b505050506040513d6020811015614ec657600080fd5b5051614ed18c613edd565b600185015460408051938452602093840192835260006101000a90910463ffffffff90811681161691830191825251910181900390a25092979650505050505050565b6000828201838110151515614f2857600080fd5b8091505b5092915050565b6000818310151515614f4457600080fd5b50900390565b6000806000600760009054906101000a9004600160a060020a0316600160a060020a031663bb34534c7f4e6f6e5374616e64617264546f6b656e526567697374727900000000000000006040518263ffffffff1660e060020a028152600401808260001916600019168152602001915050602060405180830381600087803b158015614fd557600080fd5b505af1158015614fe9573d6000803e3d6000fd5b505050506040513d6020811015614fff57600080fd5b50516040805163aeea10bd63ffffffff811660e060020a028252600160a060020a038a8116811660049093019283529251939650918616926020918201919080830381600087803b15801561505357600080fd5b505af1158015615067573d6000803e3d6000fd5b505050506040513d602081101561507d57600080fd5b5051156152165785600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156150df57600080fd5b505af11580156150f3573d6000803e3d6000fd5b505050506040513d602081101561510957600080fd5b50516040805163a9059cbb63ffffffff811660e060020a028252600160a060020a0389811681166004909301928352602092830189815293519496508a1693909290910190600090808303818387803b15801561516557600080fd5b505af1158015615179573d6000803e3d6000fd5b5050505085600160a060020a03166370a08231866040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156151d857600080fd5b505af11580156151ec573d6000803e3d6000fd5b505050506040513d602081101561520257600080fd5b50519050818111151561521157fe5b6152ad565b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561527957600080fd5b505af115801561528d573d6000803e3d6000fd5b505050506040513d60208110156152a357600080fd5b505115156152ad57fe5b505050505050565b7f800000000000000000000000000000000000000000000000000000000000000081111515156152e157fe5b33600160a060020a031684600160a060020a031686600160a060020a03167f276856b36cbc45526a0ba64f44611557a2a8b68662c5388e9fe6d72e86e1c8cb86868660405180848152602001838152602001828152602001935050505060405180910390a45050505050565b60008083600014156153625760009150614f2c565b5082820282848281151561537257fe5b04141515614f2857600080fd5b60008060008311151561539157600080fd5b828481151561539c57fe5b04949350505050565b6000809054906101000a9004600160a060020a0316600160a060020a031633600160a060020a03161415156153d957600080fd5b826000600160a060020a031681600160a060020a0316141515156153fc57600080fd5b826000600160a060020a031681600160a060020a03161415151561541f57600080fd5b8330600160a060020a031681600160a060020a03161415151561544157600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156154a457600080fd5b505af11580156154b8573d6000803e3d6000fd5b50505050505050505050565b828054828255906000526020600020908101928215615522579160200282015b828111156155225782518260006101000a815481600160a060020a030219169083600160a060020a03160217905550916020019190600101906154e4565b5061552e929150615532565b5090565b612b9191905b8082111561552e578054600160a060020a0360006101000a0219168155600101615538560042616e636f72466f726d756c610000000000000000000000000000000000000042616e636f724e6574776f726b0000000000000000000000000000000000000042616e636f72436f6e76657274657255706772616465720000000000000000008a6a7f53b3c8fa1dc4b83e3f1be668c1b251ff8d44cdcb83eb3acec3fec6a788a165627a7a723058201862ffe85ab6bce89b454f539da1dd5da05ccd2b4baa701be273cea5914737ee0029"
