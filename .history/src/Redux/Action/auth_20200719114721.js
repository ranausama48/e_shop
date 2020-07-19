export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export function login(params) {
  return (dispatch) => {
    dispatch({
      type: "LOG_OUT",
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
