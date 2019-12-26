import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import { MAX_CLUSTER_APPS_SIZE } from "./constant";
export const actionTypeCreator = action => ({
  REQUEST: action + "_REQUEST",
  LOADING: action + "_LOADING",
  SUCCESS: action + "_SUCCESS",
  FAILURE: action + "_FAILURE",
  RESET: action + "_RESET"
});
export const actionCreator = actionType => ({
  request: reqData => ({ reqData, type: actionType.REQUEST }),
  loading: () => ({ type: actionType.LOADING }),
  success: resData => ({ resData, type: actionType.SUCCESS }),
  failure: error => ({ error, type: actionType.FAILURE }),
  reset: () => ({ type: actionType.RESET })
});

export const transformTopApps = topApps => {
  debugger;
  let transformedTopApps = [];
  if (!topApps.length) return transformedTopApps;
  topApps.forEach(topApp => {
    let clusteredApp = transformedTopApps.find(
      a => a.cluster === topApp.cluster
    );
    if (!clusteredApp) {
      transformedTopApps.push({ cluster: topApp.cluster, apps: [topApp] });
    } else if (
      clusteredApp &&
      clusteredApp.apps.length < MAX_CLUSTER_APPS_SIZE
    ) {
      clusteredApp.apps.push(topApp);
    }
  });
  return transformedTopApps;
};

export const getStars = rating => {
  let starRating = Array(Math.floor(rating)).fill(
    <FontAwesomeIcon icon={faStar} />
  );
  if (Math.ceil(rating) - Math.floor(rating)) {
    starRating.push(<FontAwesomeIcon icon={faStarHalf} />);
  }
  return starRating;
};
