'use strict';

const express = require('express');
const router = express.Router();
const async = require('async')

var ethereum = require('./ethereum.js');

router.get('/',(req,res) => {
  var workers=[];
  var contracts
	// workers.push(function(done){
	//   	ethereum.selectBonds(function(err, _data) {
	// 		if(err){ 
	// 			console.error(err);
	// 			res.status(500).send("Error - see console");
	// 			return;
	// 		}else{   		
	// 			contracts = _data;  
	// 			done(); 
	// 		}
	// 	})
	// });
	workers.push(function(done) {
		ethereum.initialize({}, function(err) {
			if ( err ){
				console.error(err);
			} else {
				done();
			}
		})
	});
	async.parallel(workers, function() {
		ethereum.selectBonds(function(err, _data) {
			if(err){ 
				console.error(err);
				res.status(500).send("Error - see console");
				return;
			}else{   		
				contracts = _data;  
				done(); 
			}
		})
		res.render('index',{contract: contracts});
	}) 
});

router.get('/issue',(req,res) => {
	res.render('issue');
});

router.post('/deposit',(req,res) => {
  console.log(req.body.name)
  console.log(req.body.description)
  console.log(req.body.rate)
});


router.get('/about',(req,res) => {
  res.render('about');
});

router.get('/contact',(req,res) => {
  res.render('contact');
});


module.exports = router;