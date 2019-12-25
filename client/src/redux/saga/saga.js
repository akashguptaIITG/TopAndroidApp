import { call, put, takeLatest, all } from "redux-saga/effects";
import * as actionType from "../action/action-type";
import * as action from "../action/action";
import * as api from "../../lib/api";
function* baseSaga(reqData, apiReq, action) {
  try {
    yield put(action.loading());
    let response = yield call(apiReq, reqData.reqData);
    yield put(action.success(response));
  } catch (err) {
    console.error(err, reqData, action);
    yield put(action.failure());
  }
}

function* watchGetTopApps() {
  yield takeLatest(actionType.GET_TOP_APPS.REQUEST, reqData =>
    baseSaga(reqData, api.get, action.getTopApps)
  );
}
function* watchGetAppDetails() {
  yield takeLatest(actionType.GET_APP_DETAILS.REQUEST, reqData =>
    baseSaga(reqData, api.get, action.getAppDetails)
  );
}
function* watchScrapTopApps() {
  yield takeLatest(actionType.SCRAP_TOP_APPS.REQUEST, reqData =>
    baseSaga(reqData, api.get, action.scrapTopApps)
  );
}

export default function* rootSaga() {
  yield all([watchGetTopApps(), watchGetAppDetails(), watchScrapTopApps()]);
}
