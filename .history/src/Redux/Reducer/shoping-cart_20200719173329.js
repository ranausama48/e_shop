import { ADD_TO_CART } from "../Action/shoping-cart";

const initialState = {};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {};
    }

    default:
      return state;
  }
}

export default accountReducer;
