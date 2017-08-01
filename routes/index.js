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

module.exports = router;