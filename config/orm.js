var connection = require('../config/connection.js');

var orm = {
	all: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(error, result){
			if (error){
				throw error;
		}
		cb(result);
	});
}
};
// selectAll()
// insertOne()
// updateOne()

// export orm containing functions
module.exports = orm;