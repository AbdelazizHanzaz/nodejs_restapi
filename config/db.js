const {createPool} = require("mysql");


const pool = createPool({
     port: process.env.DB_PORT,
     host: process.env.DB_HOST,
     username: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     database: process.env.MYSQL_DB,
     connectionLimit: 10
});

module.exports = pool;