var connection = require("../config/connection");

var orm = {
    selectAll: (table, cb) => {
        var queryString = 'SELECT * FROM ${table};';
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        let queryString = 'INSERT INTO ;';
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: () => {
        let queryString = 'UPDATE';
        connection.query(queryString, (err, res) => {
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;