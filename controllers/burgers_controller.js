const express = require('express');
const router = express.Router();
const burgers = require('../models/burger.js')

// create router and export 
router.get('/', function(request, response){
	burgers.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject)
		response.render('index', hbsObject);
	});
});

router.post('/'), function(request, response){
	burgers.create(['burger'], [req.body.burger], function(result){
		
		// response.json({})
	})
}

module.exports = router;