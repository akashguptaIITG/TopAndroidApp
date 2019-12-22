const { mysqlConnection } = require("../setup/dbSetup");

const closeConnection = async () => {
  await mysqlConnection.end();
  return;
};

const insertTopApps = async () => {};

module.exports = {
  closeConnection
};
