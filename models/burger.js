var orm = require('../config/orm.js');

// code will call orm functions
var burgers = {
	selectAll: function(callBack) {
		orm.selectAll('burgers', function(response){
			callBack(response);
		});
	}
};

module.exports = burgers;