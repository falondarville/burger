var connection = require('../config/connection.js');

var orm = {
	all: function(tableInput, callBack) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(error, result){
			if (error) throw error;
			callBack(result);
	});
}
};
// selectAll()
// insertOne()
// updateOne()

// export orm containing functions
module.exports = orm;