const express = require('express');
const app = express();

//SUNDAY AI
/*
1. Track live contracts on main page,
2. Provide UI to issue contract


*/


//web3.eth.contract(abi).at(address).Issuer20();
//web3.eth.defaultAccount=web3.eth.accounts[1];
//contractInstance.issuerWithdraw(2000,{gas: 2000000})
//contractInstance.issuerRepayment({value: 2000,gas: 2000000})
//contractInstance.lenderWithdrawSuccess(2000,{gas: 2000000})
//contractInstance.issuerWithdraw(400,{gas: 2000000})
//contractInstance.couponWithdraw(50,{gas: 2000000})

// console.log(web3.eth.accounts[0])
// console.log(web3.toWei(web3.eth.getBalance(web3.eth.accounts[0]),"ether"))
// console.log()
 //console.log(web3.eth.getBalance(contractAddresses))

app.set('view engine','pug');

const mainRoutes = require('./routes/index');
app.use(mainRoutes);

app.use((req,res,next)=>{
	const err = new Error('Not Found');
	err.status=404;
	next(err);
});

app.use((err,req,res,next) =>{
	res.locals.error=err;
	res.status(500)
	res.render('error');
});

app.listen(3000);