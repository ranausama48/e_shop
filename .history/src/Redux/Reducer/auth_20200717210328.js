import { LOG_IN, LOG_OUT, USER_DETAIL } from "../Action/auth";

const initialState = {
  token: localStorage.getItem("usertoken"),
  isAuthenticated: null,
  // token: "ranausama48@gmail.com",
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      const { access_token } = action.payload;
      localStorage.setItem("usertoken", access_token);
      const userToken = localStorage.getItem("usertoken");
      return { ...state, token: userToken, isAuthenticated: true };
    }
    case LOG_OUT: {
      localStorage.setItem("usertoken", "");
      return { ...state, token: "" };
    }
    case USER_DETAIL: {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
}

export default accountReducer;
