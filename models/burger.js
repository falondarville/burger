var orm = require('../config/orm.js');

// code will call orm functions
var burgers = {
	selectAll: function(callBack) {
		orm.selectAll('burgers', function(response){
			callBack(response);
		});
	},
	insertOne: function(value, callBack) {
		orm.insertOne('burgers', 'burger_name', value, function(response){
			callBack(response);
		})
	},
	updateOne: function(value, id, callBack) {
		orm.updateOne('burgers', 'burger_name', value, id, function(response){
			callBack(response);
		})
	}
};

module.exports = burgers;