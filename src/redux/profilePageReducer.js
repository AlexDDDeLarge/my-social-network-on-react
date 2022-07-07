import { profileAPI } from "../api/api";

const ADD_POST = "react-network/profile/ADD-POST";
const SET_USER_PROFILE = "react-network/profile/SET-USER-PROFILE";
const SET_STATUS = "react-network/profile/SET-STATUS";
const DELETE_POST = "react-network/profile/DELETE-POST";
const SAVE_AVATAR_SUCCESS = "react-network/profile/SAVE_AVATAR_SUCCESS";
const TOGGLE_IS_FETCHNG = "react-network/profile/TOGGLE_IS_FETCHNG";

let initialState = {
  posts: [
    {id: "p1", likeCount: 12, text: "Медитация - круто."},
    {id: "p2", likeCount: 500, text: "Наруто - это круто."}
  ],
  profile: null,
  status: "",
  isFetching: false
}

const profilePageReducer = (state = initialState, action) => {
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
          profile: {...state.profile,
          photos: action.newAvatar
          }
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

export const addPost = newPostBody => ({type: ADD_POST, newPostBody});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});
export const deletePost = id => ({type: DELETE_POST, id});
export const saveAvatarSuccess = newAvatar => ({type: SAVE_AVATAR_SUCCESS, newAvatar});
export const toogleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHNG, isFetching});

export const setUser = (userId) => async dispatch => { 
  let data = await profileAPI.setUser(userId);
  dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async dispatch => { 
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
}

export const updateStatus = status => async dispatch => {
  let response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) dispatch(setStatus(status));
}

export const setNewAvatar = newAvatar => async dispatch => {
  dispatch(toogleIsFetching(true));
  let response = await profileAPI.updateAvatar(newAvatar);
  if (response.resultCode === 0) {
    dispatch(saveAvatarSuccess(response.data.photos))
  }
  dispatch(toogleIsFetching(false));
}

export default profilePageReducer;