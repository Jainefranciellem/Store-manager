const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.PORT,
  database: process.env.MYSQL_DATABASE || 'store_manager_db',
});

module.exports = connection;
