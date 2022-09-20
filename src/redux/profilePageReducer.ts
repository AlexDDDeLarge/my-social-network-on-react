import { AvatarType } from './../types/types';
import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { PostType } from "../types/types";

const ADD_POST = "react-network/profile/ADD-POST";
const SET_USER_PROFILE = "react-network/profile/SET-USER-PROFILE";
const SET_STATUS = "react-network/profile/SET-STATUS";
const DELETE_POST = "react-network/profile/DELETE-POST";
const SAVE_AVATAR_SUCCESS = "react-network/profile/SAVE_AVATAR_SUCCESS";
const TOGGLE_IS_FETCHNG = "react-network/profile/TOGGLE_IS_FETCHNG";

type ContactsType = {
  facebook: string | null
  website: string | null 
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

type ProfileType = {
  aboutMe?: string | null | undefined
  contacts?: ContactsType | undefined
  lookingForAJob: boolean | undefined
  lookingForAJobDescription: string | null | undefined
  fullName: string | undefined
  userId: number | undefined
  photos: AvatarType | null | undefined
  status: string | null | undefined
  isFetching: boolean | undefined
}

type StateType = {
  posts: Array<PostType>
  profile: ProfileType | null
  status: string | null
  isFetching: boolean
}

let initialState: StateType = {
  posts: [
    {id: "p1", likeCount: 12, text: "Медитация - круто."},
    {id: "p2", likeCount: 500, text: "Наруто - это круто."}
  ],
  profile: null,
  status: "",
  isFetching: false
}

const profilePageReducer = (state = initialState, action: ProfileActionsType): StateType => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {id: "p3", likeCount: 0, text: action.newPostBody}
      return {
        ...state,
        // posts: [...state.posts, newPost]
        posts: [newPost, ...state.posts]
      }
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case DELETE_POST: 
      return {
        ...state,
        posts: state.posts.filter(el => el.id !== action.id)
      }
      case SAVE_AVATAR_SUCCESS:
        return {
          ...state,
          profile: {
            ...state.profile,
            photos: action.newAvatar
          } as ProfileType
        }
      case TOGGLE_IS_FETCHNG: 
      return {
        ...state,
        isFetching: action.isFetching
      }
    default: 
      return state;
  }
}

export type ProfileActionsType =  
    AddPostActionType 
    | SetUserProfileActionType 
    |SetStatusActionType
    |DeletePostActionType 
    | SaveAvatarSuccessActionType 
    | ToogleIsFetchingActionType

type AddPostActionType = {type: typeof ADD_POST, newPostBody: string};
export const addPost = (newPostBody: string): AddPostActionType => ({type: ADD_POST, newPostBody});

type SetUserProfileActionType = {type: typeof SET_USER_PROFILE, profile:any};
export const setUserProfile = (profile: PostType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});

type SetStatusActionType = {type: typeof SET_STATUS, status: string};
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
 
type DeletePostActionType = {type: typeof DELETE_POST, id: string};
export const deletePost = (id: string): DeletePostActionType => ({type: DELETE_POST, id});

type SaveAvatarSuccessActionType = {type: typeof SAVE_AVATAR_SUCCESS, newAvatar: AvatarType};
export const saveAvatarSuccess = (newAvatar: AvatarType): SaveAvatarSuccessActionType => ({type: SAVE_AVATAR_SUCCESS, newAvatar});

type ToogleIsFetchingActionType = {type: typeof TOGGLE_IS_FETCHNG, isFetching: boolean};
export const toogleIsFetching = (isFetching: boolean): ToogleIsFetchingActionType => ({type: TOGGLE_IS_FETCHNG, isFetching});

export const setUser = (userId: number) => async (dispatch: any) => { 
  let data = await profileAPI.setUser(userId);
  dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: any) => { 
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) dispatch(setStatus(status))
    else throw response.messages[0]
  } catch (error) {
    alert(error);
  }
}

export const setNewAvatar = (newAvatar: any) => async (dispatch: any) => {
  dispatch(toogleIsFetching(true));
  let response = await profileAPI.updateAvatar(newAvatar);
  if (response.resultCode === 0) {
    dispatch(saveAvatarSuccess(response.data.photos))
  }
  dispatch(toogleIsFetching(false));
}

export const setNewProfileInfo = (profile: PostType) => async (dispatch: any, getState: any) => {
  let userId = getState().auth.userId;
  let response = await profileAPI.updateProfileInfo(profile);
  if (response.resultCode === 0) {
    dispatch(setUser(userId));
  } else {
    type ErrorsType = {
      contacts: {
        [key: string]: string
      }
    } 
    let Errors:ErrorsType  = {
      contacts: {}
    };
    response.messages.forEach((message: string) => {
      let errorNameStartIndex = message.indexOf(">");
      let errorName: string = message.slice(errorNameStartIndex + 1, message.length -1).toLowerCase();
      Errors.contacts[errorName] = message
    })
    let action = stopSubmit("editProfile", Errors);
    dispatch(action)
  }
}

export default profilePageReducer;