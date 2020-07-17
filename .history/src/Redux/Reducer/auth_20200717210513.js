import { LOG_IN, LOG_OUT, USER_DETAIL } from "../Action/auth";

const initialState = {
  email: "ranausama48@gmail.com",
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return { ...state };
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
