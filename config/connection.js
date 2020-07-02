var mysql = require("mysql");
const orm = require("./orm");
var connection;

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "vans8117",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error:" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;