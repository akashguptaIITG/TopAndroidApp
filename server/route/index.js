module.exports = app => {
  app.use("api/topApps/", require("./topApps"));
};
