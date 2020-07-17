import { ADD_PRODUCT } from "../Action/add-product";

const initialState = {
  products: [
    {
      desc: "desc",
      id: "c667",
      posted_by: "Usama",
      posting_date: "2020-07-07",
      product_name: "Nike Shoes",
      product_price: "777",
    },
  ],
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return { ...state, products: [...state.products, action.payload] };
    }
    default:
      return state;
  }
}

export default accountReducer;
