export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCT = "GET_PRODUCT";
export function addProduct(params) {
  return (dispatch) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: params,
    });
  };
}
