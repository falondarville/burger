var orm = require('../config/orm.js');

// code will call orm functions
var burgers = {
	all: function(callBack) {
		orm.all('burgers', function(response){
			callBack(response);
		});
	}
};

module.exports = burgers;