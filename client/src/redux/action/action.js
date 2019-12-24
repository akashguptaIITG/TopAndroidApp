import { actionCreator } from "../../lib/helper";
import * as actionType from "./action-type";
export const getTopApps = actionCreator(actionType.GET_TOP_APPS);
export const getAppDetails = actionCreator(actionType.GET_APP_DETAILS);
export const scrapTopApps = actionCreator(actionType.SCRAP_TOP_APPS);
