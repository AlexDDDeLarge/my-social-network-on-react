import { loginThunk } from "./auth-reducer";

let INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
};

const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

type InitializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
  await dispatch( loginThunk() );
  dispatch( initializedSuccess() );
}

export default appReducer;