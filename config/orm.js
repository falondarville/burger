var connection = require('../config/connection.js');

var orm = {
	selectAll: function(tableInput, callBack) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function(error, result){
			if (error) throw error;
			callBack(result);
		});
	},
	insertOne: function(tableInput, columnName, value, callBack) {
		var queryString = "INSERT INTO " + tableInput + "(" + columnName +") VALUES(" + value + ");"
		connection.query(queryString, function(error, result){
			if (error) throw error;
			callBack(result);
		})
	}
};
// insertOne()
// updateOne()

// export orm containing functions
module.exports = orm;