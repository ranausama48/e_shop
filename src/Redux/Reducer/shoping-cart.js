import { ADD_TO_CART } from "../Action/shoping-cart";

const initialState = {
  shopingProduct: [],
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        shopingProduct: [...state.shopingProduct, action.payload],
      };
    }

    default:
      return state;
  }
}

export default accountReducer;
