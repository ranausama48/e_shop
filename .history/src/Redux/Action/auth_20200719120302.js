export const LOG_IN = "LOG_IN";
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
export function logout() {
  return (dispatch) => {
    dispatch({
      type: "LOG_OUT",
    });
  };
}
