import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

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
    default: 
      return state;
  }
}

export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const setUser = (userId) => dispatch => { 
  profileAPI.setUser(userId)
  .then(data => dispatch(setUserProfile(data)));
}

export const getStatus = (userId) => dispatch => { 
  profileAPI.getStatus(userId)
   .then(response => dispatch(setStatus(response)))
}

export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.resultCode === 0) dispatch(setStatus(status));
    })
}

export default profilePageReducer;