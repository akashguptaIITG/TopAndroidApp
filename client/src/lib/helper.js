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
