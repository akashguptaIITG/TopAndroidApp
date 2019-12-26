const { mysqlConnection } = require("../setup/dbSetup");
const queries = require("../common/queries");
const closeConnection = async () => {
  await mysqlConnection.end();
  return;
};

const insertOrUpdateTopApps = jsonRequest => {
  console.log("insertOrUpdateTopApps: started for appId: ", jsonRequest.appId);
  return mysqlConnection
    .query(queries.insertOrUpdateTopApps, [JSON.stringify(jsonRequest)])
    .catch(err => console.error(err));
};
const bulkInsertOrUpdateTopApps = async jsonRequestArr => {
  console.log("bulkInsertOrUpdateTopApps: started");
  let promiseArr = jsonRequestArr.map(jsonRequest =>
    insertOrUpdateTopApps(jsonRequest)
  );
  await Promise.all(promiseArr);
  console.log("bulkInsertOrUpdateTopApps: completed");
};
const getTopApps = () => {
  console.log("getTopApps: started");
  return mysqlConnection
    .query(queries.getTopApps)
    .catch(err => console.error(err));
};
module.exports = {
  closeConnection,
  insertOrUpdateTopApps,
  bulkInsertOrUpdateTopApps,
  getTopApps
};
