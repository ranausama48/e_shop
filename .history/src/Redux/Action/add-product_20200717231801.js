export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCT = "GET_PRODUCT";
export function addProduct(params) {
  const valuse = {
    ...params,
    posting_date: { ...params.posting_date.format("YYYY-MM-DD") },
  };
  return (dispatch) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: valuse,
    });
  };
}
