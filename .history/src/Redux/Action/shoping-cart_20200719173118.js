export const LOG_IN = "ADD_TO_CART";
export const LOG_OUT = "LOG_OUT";
export function login(params) {
  console.log(params);
  return (dispatch) => {
    dispatch({
      type: "LOG_IN",
      payload: params,
    });
  };
}
