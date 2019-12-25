import {
  GET_TOP_APPS,
  GET_APP_DETAILS,
  SCRAP_TOP_APPS
} from "../action/action-type";

const initialState = {
  isLoadingTopApps: false,
  isLoadingAppDetails: false,
  isScrappingTops: false,
  topApps: [],
  appDetails: {},
  error: {}
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_APPS.LOADING:
      return Object.assign({}, ...[state], { isLoadingTopApps: true });
    case GET_TOP_APPS.SUCCESS:
      return Object.assign({}, ...[state], {
        isLoadingTopApps: false,
        topApps: action.resData
      });
    case GET_TOP_APPS.FAILURE:
      return Object.assign({}, ...[state], {
        isLoadingTopApps: false,
        error: action.error
      });
    case GET_APP_DETAILS.LOADING:
      return Object.assign({}, ...[state], { isLoadingAppDetails: true });
    case GET_APP_DETAILS.SUCCESS:
      return Object.assign({}, ...[state], {
        isLoadingAppDetails: false,
        appDetails: action.resData
      });
    case GET_APP_DETAILS.FAILURE:
      return Object.assign({}, ...[state], {
        isLoadingAppDetails: false,
        error: action.error
      });
    case SCRAP_TOP_APPS.LOADING:
      return Object.assign({}, ...[state], { isScrappingTops: true });
    case SCRAP_TOP_APPS.SUCCESS:
      return Object.assign({}, ...[state], {
        isScrappingTops: false,
        topApps: action.resData
      });
    case SCRAP_TOP_APPS.FAILURE:
      return Object.assign({}, ...[state], {
        isScrappingTops: false,
        error: action.error
      });
    default:
      return state;
  }
};
export default appReducer;
