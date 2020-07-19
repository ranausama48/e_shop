export const LOGIN = "LOGIN";
export const LOG_OUT = "LOG_OUT";
export function logout() {
  return (dispatch) => {
    dispatch({
      type: "LOG_OUT",
    });
  };
}
