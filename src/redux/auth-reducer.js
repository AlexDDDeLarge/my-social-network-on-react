import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

let SET_USER_DATA = "react-network/auth/SET-USER-DATA";
let LOGOUT = "react-network/auth/LOGOUT";
const GET_CAPCHA_URL_SUCCESS = "react-network/auth/GET_CAPCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  capchaUrl: null
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
    case GET_CAPCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default: 
      return state;
  }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {
  userId, email, login
}});
export const getLogout = () => ({type: LOGOUT});
export const getCapchaUrlSuccess = (capchaUrl) => ({type: GET_CAPCHA_URL_SUCCESS, payload: {capchaUrl}});

//Thunks
export const loginThunk = () => async dispatch => {
  let response = await authAPI.me()
  if (response.resultCode === 0) {
    let {id, email, login} = response.data;
    dispatch(setAuthUserData(id, email, login));
  }
}

export const getCapchaUrl = () => async dispatch => {
  const response = await securityAPI.getCapchaUrl();
  const capchaUrl = response.url;
  dispatch(getCapchaUrlSuccess(capchaUrl));
}

export const signIn = (email, password, rememberMe, captcha) => async dispatch => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.resultCode === 0) {
    dispatch( loginThunk() )
  } else {
    if (response.resultCode === 10) {
      dispatch(getCapchaUrl());
    }
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