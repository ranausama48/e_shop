import { combineReducers } from "redux";

import auth from "./auth";
import addProduct from "./add-product";

const rootReducer = combineReducers({
  auth: auth,
  addProduct: addProduct,
});

export default rootReducer;
