import { ADD_PRODUCT } from "../Action/add-product";

const initialState = {};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, buyers: [...state.buyers, action.payload] };
    }
    default:
      return state;
  }
}

export default accountReducer;
