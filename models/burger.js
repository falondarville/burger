var orm = require('../config/orm.js');

// code will call orm functions
var burgers = {
	selectAll: function(callBack) {
		orm.selectAll('burgers', function(response){
			callBack(response);
		});
	},
	insertOne: function(value, callBack) {
		// how do I move the value from form to here?
		orm.insertOne('burgers', 'burger_name', value, function(response){
			callBack(response);
		})
	}
};

module.exports = burgers;