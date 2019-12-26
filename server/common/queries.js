module.exports = {
  getTopApps: `SELECT ta.AppId AS appId,
                            ta.Cluster as cluster,
                            ta.Title as title,
                            ta.Developer as developer,
                            ta.ImageUrl as imageUrl,
                            Price as price,
                            Rating as rating
                            FROM top_app ta 
                            where apprank<>0
                            order by cluster, updatedAt desc,apprank asc LIMIT 60;`,
  insertOrUpdateTopApps: "CALL SP_INSERT_OR_UPDATE_TOP_APP(?);"
};
