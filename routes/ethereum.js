//web3 config
var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//contract abi
var abi = [{"constant":true,"inputs":[],"name":"lenderLock","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"issuerRepayment","outputs":[{"name":"lenderBal","type":"uint256"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"withdrawAmount","type":"uint256"}],"name":"couponWithdraw","outputs":[{"name":"couponBal","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"withdrawAmount","type":"uint256"}],"name":"lenderWithdrawSuccess","outputs":[{"name":"lenderBal","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"withdrawAmount","type":"uint256"}],"name":"lenderWithdrawFail","outputs":[{"name":"lenderBal","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"Lender","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"Issuer20","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"getIssuer","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"Issuer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"issuerLock","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"withdrawAmount","type":"uint256"}],"name":"issuerWithdraw","outputs":[{"name":"issuerBal","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"couponPayment","outputs":[{"name":"couponBal","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"lenderBond","outputs":[{"name":"IssuerBal","type":"uint256"}],"payable":true,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_msg","type":"string"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"txnOccured","type":"event"}]

//object storing contract addresses
contractAddresses = [];
contractAddresses.push("0x60726a208d34d9891cd1b071c21c9864c161b7a4");

//connect to contract instances
var AgileBond = web3.eth.contract(abi);
var contractInstance = AgileBond.at(contractAddresses[0]);

exports.selectBonds = function(callback) {
	var bonds = [];
	for (let i=0;i<contractAddresses.length;i++)
	{
		bonds.push
		(
		{name: contractAddresses[i],
		issuer: 'ABC Corp.',
		rate: 0.25,
		balance: 100
		}
		)
	}
	web3.eth.defaultAccount=web3.eth.accounts[0];
	console.log(web3.eth.getBalance(web3.eth.accounts[0]))
	var metamask = "0x0c5a837Eb8bCB95141077eEc623a4E9b6d710F01"

	transactionObject ={
	to: metamask,
	value: web3.toWei(5, "ether")
	}

	web3.eth.sendTransaction(transactionObject);
	console.log(bonds)
	callback(null,bonds);
}

//module.exports = ethereum;