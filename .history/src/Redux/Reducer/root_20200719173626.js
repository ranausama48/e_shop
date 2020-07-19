import { combineReducers } from "redux";

import auth from "./auth";
import addProduct from "./add-product";
import shopingCart from "./shoping-cart";

const rootReducer = combineReducers({
  auth: auth,
  addProduct: addProduct,
  shopingCart: shopingCart,
});

export default rootReducer;
