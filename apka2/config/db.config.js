'use strict';
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : '1234',
    database : 'booskdb'
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;
