import { ADD_PRODUCT } from "../Action/add-product";

const initialState = {};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BUYER: {
      return { ...state, buyers: [...state.buyers, action.payload] };
    }
    case GET_BUYER: {
      const totalBuyer = action.payload;
      return { ...state, buyers: totalBuyer };
    }
    case BUYER_INNER: {
      return { ...state };
    }
    default:
      return state;
  }
}

export default accountReducer;
