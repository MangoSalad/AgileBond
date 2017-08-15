'use strict';

const express = require('express');
const router = express.Router();

var ethereum = require('./ethereum.js');

router.get('/',(req,res) => {
	console.log('connected to index');
	ethereum.selectBonds(function(err, _data) {
     	if(err){ 
     		console.error(err);
     		res.status(500).send("Error - see console");
            return;
		}else{   		
   			var contracts = _data;   
   			res.render('index',{contract: contracts});
   		}
	} ); 
});

router.get('/issue',(req,res) => {
	res.render('issue');
});

router.post('/deposit',(req,res) => {
  console.log(req.body.name)
  console.log(req.body.description)
  console.log(req.body.rate)
  res.on('data', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    //window.web3 = new Web3(web3.currentProvider);
    res.render('deposit');
    console.log('no metamask')
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    res.render('deposit');
    console.log('metamask')
    //window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }});
});


router.get('/about',(req,res) => {
  res.render('about');
});

router.get('/contact',(req,res) => {
  res.render('contact');
});


module.exports = router;