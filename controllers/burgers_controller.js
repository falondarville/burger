const express = require('express');

const router = express.Router();

const burgers = require('../models/burger.js')

// create router and render the html
router.get('/', function(request, response){
	burgers.selectAll(function(burgers){
		
		response.render('index', {
			burgers: burgers
		});
	});
});

router.post('/api/burgers', function(request, response){
	
	//Use Model to create a new burger object in mysql
	burgers.insertOne(request.body.burger, function(result){
		response.status(200).json({message: 'new burger'})
	})
});

// router.put('/api/burgers/:id', function(request, response){
	
// })

module.exports = router;