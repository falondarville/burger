var orm = require('../config/orm.js');

// code will call orm functions
var burgers = {
	all: function(cb) {
		orm.all('burgers', function(response){
			cb(response);
		});
	}
};

module.exports = burgers;