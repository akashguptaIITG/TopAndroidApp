require("dotenv").config();
const appConfig = require("config").get("app");
const app = require("express")();
const cors = require("cors");
app.use(cors());
require("./route/index")(app);

app.listen(appConfig.port, () =>
  console.log(`server running on port: ${appConfig.port}`, process.env.NODE_ENV)
);
