// import { PostsConstructor } from "./functionsConstructor"

const UPDATE_CURRENT_TEXT_OF_THE_NEW_POST = "UPDATE-CURRENT-TEXT-OF-THE-NEW-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  posts: [
    // new PostsConstructor("p1", 12, "Медитация - круто."),
    // new PostsConstructor("p2", 500, "Наруто - это круто."),
    {id: "p1", likeCount: 12, text: "Медитация - круто."},
    {id: "p2", likeCount: 500, text: "Наруто - это круто."}
  ],
  newPostCurrentText: "",
  profile: null
}

const profilePageReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CURRENT_TEXT_OF_THE_NEW_POST: 
      // let stateCopy = {...state};
      // stateCopy.newPostCurrentText = action.newValue;
      // return stateCopy;
      return {
        ...state,
        newPostCurrentText: action.newValue
      }
    case ADD_POST: {
      // let newPost = new PostsConstructor("p3", 0, state.newPostCurrentText);
      let newPost = {id: "p3", likeCount: 0, text: state.newPostCurrentText}
      // let stateCopy = {...state};
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push( newPost );
      // stateCopy.newPostCurrentText = "";
      // return stateCopy;
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

export default profilePageReducer;