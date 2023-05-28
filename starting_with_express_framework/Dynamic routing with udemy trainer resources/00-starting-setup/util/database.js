const mysql = require("mysql2");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	database: "node_complete",
	password: "Born2win@1995",
});

module.exports = pool.promise();
