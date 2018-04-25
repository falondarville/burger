// connects Node to MySQL
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
})

// test connection 
connection.connect(function(error){
	if (error) throw error;
	console.log('Connected to ' + connection.threadId);
})


// export the connection
module.exports = connection;