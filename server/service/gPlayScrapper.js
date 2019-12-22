const request = require("request-promise");
const cheerio = require("cheerio");
const { GPLAY_STORE_URL, GPLAY_STORE_CLASS } = require("../common/constant");
const getGPlayTopApps = async () => {
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
        appInfo.price = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_PRICE)
          .text()
          .replace(/[^0-9.]/gi, "");
        appInfo.rating = $(appInfoEl)
          .find(GPLAY_STORE_CLASS.APP_RATING)
          .find("div")
          .first()
          .attr("aria-label")
          .replace(/[^0-9.]/gi, "");

        appInfoArr.push(appInfo);
      });
  });
  console.log(appInfoArr, appInfoArr.length);
  return appInfoArr;
};

module.exports = {
  getGPlayTopApps
};
