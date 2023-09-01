const Sequelize = require('sequelize');

const sequelize = new Sequelize("workshop_mysql", "root", "", {
    dialect: "mysql",
    host: "localhost"
});


module.exports = sequelize;





// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: "localhost",
//     database: "workshop_mysql",
//     user: "root",
//     password: ""
// });

// module.exports = pool.promise();