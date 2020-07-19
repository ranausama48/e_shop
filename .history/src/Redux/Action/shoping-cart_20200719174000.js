export const ADD_TO_CART = "ADD_TO_CART";

export function addTocart(params) {
  console.log(params);
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: params,
    });
  };
}
