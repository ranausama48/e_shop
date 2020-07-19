import { LOG_IN, LOG_OUT, USER_DETAIL } from "../Action/auth";
import password from "antd/lib/input/Password";

const initialState = {
  user: {
    email: "ranausama48@gmail.com",
    name: "Usama Asif",
  },
  auth: true,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        user: {
          email: action.payload.email,
        },
      };
    }
    case LOG_OUT: {
      return { user: {}, auth: false };
    }
    default:
      return state;
  }
}

export default accountReducer;
