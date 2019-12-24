module.exports = app => {
  app.use("/api/app", require("./topApps"));
};
