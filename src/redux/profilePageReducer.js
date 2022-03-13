import { profileAPI } from "../api/api";

const UPDATE_CURRENT_TEXT_OF_THE_NEW_POST = "UPDATE-CURRENT-TEXT-OF-THE-NEW-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  posts: [
    {id: "p1", likeCount: 12, text: "Медитация - круто."},
    {id: "p2", likeCount: 500, text: "Наруто - это круто."}
  ],
  newPostCurrentText: "",
  profile: null
}

const profilePageReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CURRENT_TEXT_OF_THE_NEW_POST: 
      return {
        ...state,
        newPostCurrentText: action.newValue
      }
    case ADD_POST: {
      let newPost = {id: "p3", likeCount: 0, text: state.newPostCurrentText}
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostCurrentText: ""
      }
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default: 
      return state;
  }
}

export const updateCurrentTextOfTheNewPostActionConstructor = function (text) {
  return {
    type: UPDATE_CURRENT_TEXT_OF_THE_NEW_POST,
    newValue: text
  }
}
export const addPostActionCreator = function () {
  return {
    type: ADD_POST  
  }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setUser = (userId) => dispatch => { 
  profileAPI.setUser(userId)
  .then(data => dispatch(setUserProfile(data)));
}

export default profilePageReducer;