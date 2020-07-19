import { ADD_TO_CART } from "../Action/shoping-cart";

const initialState = {
  shopingProduct: [
    {
      productId: 663,
    },
  ],
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {};
    }

    default:
      return state;
  }
}

export default accountReducer;
