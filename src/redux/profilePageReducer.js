import { profileAPI } from "../api/api";

const ADD_POST = "react-network/profile/ADD-POST";
const SET_USER_PROFILE = "react-network/profile/SET-USER-PROFILE";
const SET_STATUS = "react-network/profile/SET-STATUS";
const DELETE_POST = "react-network/profile/DELETE-POST";

let initialState = {
  posts: [
    {id: "p1", likeCount: 12, text: "Медитация - круто."},
    {id: "p2", likeCount: 500, text: "Наруто - это круто."}
  ],
  profile: null,
  status: ""
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
    default: 
      return state;
  }
}

export const addPost = newPostBody => ({type: ADD_POST, newPostBody});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});
export const deletePost = id => ({type: DELETE_POST, id})

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

export default profilePageReducer;