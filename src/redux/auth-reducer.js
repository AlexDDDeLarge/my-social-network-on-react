import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

let SET_USER_DATA = "SET-USER-DATA";
let LOGOUT = "LOGOUT";

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

// AC
export const setAuthUserData = (userId, email, login) => {
  return {
    type: SET_USER_DATA, 
    data: {
      userId,
      email,
      login
    }
  }
}
export const getLogout = () => ({type: LOGOUT});

//THUNKS
export const loginThunk = () => dispatch => {
  return authAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login));
      }
    })
}

export const signIn = (email, password, rememberMe, captcha) => dispatch => {
  authAPI.login(email, password, rememberMe, captcha)
    .then(response => {
      if (response.resultCode === 0) {
        dispatch( loginThunk() )
      } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error";
        let action = stopSubmit("login", {_error: message});
        dispatch(action)
      }
    })
}

export const logout = () => dispatch => {
  authAPI.logout()
   .then(response => {
     if (response.resultCode === 0) {
       dispatch( getLogout() )
     }
   })
}

export default authReducer;