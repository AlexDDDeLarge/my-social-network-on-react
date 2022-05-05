import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

let SET_USER_DATA = "react-network/auth/SET-USER-DATA";
let LOGOUT = "react-network/auth/LOGOUT";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    case LOGOUT: 
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isAuth: false
      }
    default: 
      return state;
  }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {
  userId, email, login
}});
export const getLogout = () => ({type: LOGOUT});

//Thunks
export const loginThunk = () => async dispatch => {
  let response = await authAPI.me()
  if (response.resultCode === 0) {
    let {id, email, login} = response.data;
    dispatch(setAuthUserData(id, email, login));
  }
}

export const signIn = (email, password, rememberMe, captcha) => async dispatch => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.resultCode === 0) {
    dispatch( loginThunk() )
  } else {
    let message = response.messages.length > 0 ? response.messages[0] : "Some error";
    let action = stopSubmit("login", {_error: message});
    dispatch(action)
  }
}

export const logout = () => async dispatch => {
  let response = await authAPI.logout();
  if (response.resultCode === 0) dispatch( getLogout() );
}

export default authReducer;