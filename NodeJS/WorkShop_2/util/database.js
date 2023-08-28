
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    database: "workshop_mysql",
    user: "root",
    password: ""
});

module.exports = pool.promise();