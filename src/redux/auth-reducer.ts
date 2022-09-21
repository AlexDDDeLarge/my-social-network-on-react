import { setUser } from './profilePageReducer';
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";
import { ThunkActionType } from '../types/types';

const SET_USER_DATA = "react-network/auth/SET-USER-DATA";
const LOGOUT = "react-network/auth/LOGOUT";
const GET_CAPCHA_URL_SUCCESS = "react-network/auth/GET_CAPCHA_URL_SUCCESS";

type StateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  capchaUrl: string | null
}

let initialState: StateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  capchaUrl: null
};

const authReducer = (state = initialState, action: AuthActionsType): StateType => {
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

export type AuthActionsType = SetAuthUserDataType | GetLogoutType | GetCapchaUrlSuccessType

type SetAuthUserDataPayloadType = {
  userId: number
  email: string
  login: string
}
type SetAuthUserDataType = {type: typeof SET_USER_DATA, data: SetAuthUserDataPayloadType}
export const setAuthUserData = (
  userId: number, 
  email: string, 
  login: string): SetAuthUserDataType => ({
  type: SET_USER_DATA, 
  data: {
    userId, email, login
  }
});

type GetLogoutType = {type: typeof LOGOUT}
export const getLogout = (): GetLogoutType => ({type: LOGOUT});

type GetCapchaUrlSuccessType = {type: typeof GET_CAPCHA_URL_SUCCESS, payload: {capchaUrl: string}}
export const getCapchaUrlSuccess = (capchaUrl: string): GetCapchaUrlSuccessType => ({
  type: GET_CAPCHA_URL_SUCCESS, 
  payload: {capchaUrl}
});

//Thunks
export const loginThunk = (): 
  ThunkActionType<void, unknown> => async (dispatch: any) => {
  let response = await authAPI.me()
  if (response.resultCode === 0) {
    let {id, email, login} = response.data;
    dispatch(setAuthUserData(id, email, login));
  }
}

export const getCapchaUrl = (): 
  ThunkActionType<void, unknown> => async (dispatch: any) => {
  const response = await securityAPI.getCapchaUrl();
  const capchaUrl = response.url;
  dispatch(getCapchaUrlSuccess(capchaUrl));
}

export const signIn = (email: string, password: string, rememberMe: boolean, captcha: string): 
  ThunkActionType<void, unknown> => async (dispatch: any) => {
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

export const logout = (): 
  ThunkActionType<void, unknown> => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.resultCode === 0) dispatch( getLogout() );
}

export default authReducer;