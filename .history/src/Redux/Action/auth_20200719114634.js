export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export function logout() {
  return (dispatch) => {
    dispatch({
      type: "LOG_OUT",
    });
  };
}
