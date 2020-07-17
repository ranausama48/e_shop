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
      return { email: "" };
    }
    default:
      return state;
  }
}

export default accountReducer;
