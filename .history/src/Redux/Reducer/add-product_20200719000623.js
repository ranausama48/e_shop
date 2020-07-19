import { ADD_PRODUCT } from "../Action/add-product";

const initialState = {
  products: [
    {
      desc: "desc 1",
      id: "c667",
      posted_by: "Usama Asif",
      posting_date: "2020-07-07",
      product_name: "Nike Shoes",
      product_price: "777",
      ImgUrls:
        "https://res.cloudinary.com/osamaasif/image/upload/v1595099006/shoesimages/azicyp3gt0lyjozztipr.jpg",
    },
    {
      desc: "desc 2",
      id: "d667",
      posted_by: "Ali Ahmad",
      posting_date: "2020-07-07",
      product_name: "Bata Shoes",
      product_price: "777",
      ImgUrls:
        "https://res.cloudinary.com/osamaasif/image/upload/v1595099006/shoesimages/azicyp3gt0lyjozztipr.jpg",
    },
    {
      desc: "desc 3",
      id: "e667",
      posted_by: "Umer Nawaz",
      posting_date: "2020-07-07",
      product_name: "Services Shoes",
      product_price: "777",
      ImgUrls:
        "https://res.cloudinary.com/osamaasif/image/upload/v1595099006/shoesimages/azicyp3gt0lyjozztipr.jpg",
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
