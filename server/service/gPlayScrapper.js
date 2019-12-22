const request = require("request-promise");
const cheerio = require("cheerio");
const { GPLAY_STORE_URL, GPLAY_STORE_CLASS } = require("../common/constant");
const getGPlayTopApps = async () => {
  console.log("getGPlayTopApps: started");
  let data = await request.get(GPLAY_STORE_URL.TOP_APPS);
  const $ = cheerio.load(data);
  let appInfoArr = [];
  $(GPLAY_STORE_CLASS.CLUSTER).each((index, el) => {
    let cluster = $(el)
      .find(GPLAY_STORE_CLASS.CLUSTER_TITLE)
      .text();
    $(el)
      .find(GPLAY_STORE_CLASS.APP_INFO)
      .each((i, appInfoEl) => {
        let appInfo = {};
        appInfo.appId = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_ID)
          .find("a")
          .attr("href")
          .replace("/store/apps/details?id=", "");
        appInfo.cluster = cluster;
        appInfo.title = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_TITLE)
          .text();
        appInfo.developer = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_DEVELOPER)
          .text();
        appInfo.imageUrl = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_IMAGE)
          .data("src");
        // in rs
        let price = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_PRICE)
          .text()
          .replace(/[^0-9.]/gi, "");
        appInfo.price = price ? parseFloat(price) : 0;
        appInfo.rating = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_RATING)
          .find("div")
          .first()
          .attr("aria-label")
          .replace(/[^0-9.]/gi, "");

        appInfoArr.push(appInfo);
      });
  });
  console.log("getGPlayTopApps: completed");

  return appInfoArr;
};

const getAppDetails = async appId => {
  console.log("getAppDetails: started, appId: ", appId);
  let appInfo = {};
  let url = GPLAY_STORE_URL.APP_DETAILS + appId;
  let data = await request.get(url);
  const $ = cheerio.load(data);
  let screenshots = [];
  appInfo.appId = appId;
  appInfo.title = $(GPLAY_STORE_CLASS.APP_DETAILS_TITLE).text();
  appInfo.developer = $(GPLAY_STORE_CLASS.APP_DETAILS_DEVELOPER_AND_CATEGORY)
    .first()
    .text();
  appInfo.category = $(GPLAY_STORE_CLASS.APP_DETAILS_DEVELOPER_AND_CATEGORY)
    .last()
    .text();
  appInfo.imageUrl = $(GPLAY_STORE_CLASS.APP_DETAILS_IMAGE_URL).attr("src");
  $(GPLAY_STORE_CLASS.APP_DETAILS_SCREENSHOTS).map((i, el) => {
    let screenshot = $(el).data("src");
    if (screenshot) {
      screenshots.push(screenshot);
    }
  });
  appInfo.screenshots = screenshots;
  console.log(appInfo);
  console.log("getAppDetails: completed, appId", appId);

  return appInfo;
};
module.exports = {
  getGPlayTopApps,
  getAppDetails
};
