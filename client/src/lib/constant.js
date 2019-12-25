export const BASE_API_URL = "http://localhost:4400/api";
export const API_PATH = {
  GET_TOP_APPS: () => `/app/topApps/all`,
  GET_APP_DETAILS: appId => `/app/details/${appId}`,
  SCRAP_TOP_APPS: () => `/app/topApps/scrap`
};

export const MAX_CLUSTER_APPS_SIZE = 5;
