import { ADD_PRODUCT } from "../Action/add-product";

const initialState = {
  products: [
    {
      desc:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy",
      id: "c661",
      posted_by: "Usama Asif",
      posting_date: "2020-07-07",
      product_name: "Nike Shoes",
      product_price: "777",
      ImgUrls:
        "https://res.cloudinary.com/osamaasif/image/upload/v1595139859/shoesimages/ahuq7srb1bmy9btgtocw.jpg",
    },
    ,
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
