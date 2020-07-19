export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export function logout() {
  return (dispatch) => {
    dispatch({
      type: "ADD_PRODUCT",
    });
  };
}
