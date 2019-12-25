import { combineReducers } from "redux";
import appReducer from "./app-reducer";

const reducer = combineReducers({
  appData: appReducer
});

export default reducer;
