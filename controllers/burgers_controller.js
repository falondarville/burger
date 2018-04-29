const express = require('express');
const router = express.Router();
const burgers = require('../models/burger.js')

// create router and export 
router.get('/', function(request, response){
	burgers.selectAll(function(burgers){
		var hbsObject = {
			burgers: burgers
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