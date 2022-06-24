import { combineReducers } from "redux";
import appReducer from "./app";
import authReducer from "./auth";
import pharmacyReducers from "./pharmacy";

const rootReducer = combineReducers({
  app: appReducer,
  // pharmacy: pharmacyReducers,
  auth: authReducer,
});

export default rootReducer;
