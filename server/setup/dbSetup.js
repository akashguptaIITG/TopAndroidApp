const mysql = require("mysql2/promise");
const dbConfig = require("config").get("db");

const { host, port, database, user, password, connectionLimit } = dbConfig;
const mysqlConnection = mysql.createPool({
  host,
  port,
  database,
  user,
  password,
  connectionLimit
});

module.exports = {
  mysqlConnection
};
