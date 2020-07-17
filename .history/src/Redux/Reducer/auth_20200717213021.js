import { LOG_IN, LOG_OUT, USER_DETAIL } from "../Action/auth";

const initialState = {
  user: {
    email: "ranausama48@gmail.com",
    name: "Usama Asif",
  },
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return { ...state };
    }
    case LOG_OUT: {
      return { user: {} };
    }
    default:
      return state;
  }
}

export default accountReducer;
