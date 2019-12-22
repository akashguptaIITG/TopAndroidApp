const router = require("express").Router();
const gPlayScrapper = require("../service/gPlayScrapper");
const dataService = require("../service/dataService");

router.get("all", async (req, res) => {});
router.get("/scrap", async (req, res) => {
  let topApps = await gPlayScrapper.getGPlayTopApps();
  await dataService.bulkInsertOrUpdateTopApps(topApps);
  return res.send("Success");
});
router.get("/details/:id", async (req, res) => {
  let appId = req.params.id;
  let appDetails = await gPlayScrapper.getAppDetails(appId);
  return res.json(appDetails);
});
module.exports = router;
