import { combineReducers } from "redux";

import auth from "./auth";
import addBuyer from "./add-product";

const rootReducer = combineReducers({
  auth: auth,
});

export default rootReducer;
