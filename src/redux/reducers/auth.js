import {
  LOGIN,
  LOGOUT,
} from "../action/actionType";

const initialState = {
  token: null,
  loggedIn: false,
  loggingIn: false,
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    
    default:
      return state;
  }
}