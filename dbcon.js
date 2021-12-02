const mysql = require('mysql');
const config = require('./dbconfig.json');

module.exports = mysql.createPool(config); //쓸수 있게 방출