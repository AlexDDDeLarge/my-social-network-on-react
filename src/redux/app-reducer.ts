import { ThunkActionType } from './../types/types';
import { loginThunk } from "./auth-reducer";

let INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
};

const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
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

export type AppActionsType = InitializedSuccessType

type InitializedSuccessType = {type: typeof INITIALIZED_SUCCESS}
export const initializedSuccess = (): InitializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = (): 
  ThunkActionType<void, unknown> => async (dispatch: any) => {
  await dispatch( loginThunk() );
  dispatch( initializedSuccess() );
}

export default appReducer;