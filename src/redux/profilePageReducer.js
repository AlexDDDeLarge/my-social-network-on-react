import { PostsConstructor } from "./functionsConstructor"

const UPDATE_CURRENT_TEXT_OF_THE_NEW_POST = "UPDATE-CURRENT-TEXT-OF-THE-NEW-POST";
const ADD_POST = "ADD-POST";

let initialState = {
  posts: [
    new PostsConstructor("p1", 12, "Медитация - круто."),
    new PostsConstructor("p2", 500, "Наруто - это круто."),
  ],
  newPostCurrentText: ""
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
      let newPost = new PostsConstructor("p3", 0, state.newPostCurrentText);
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

export default profilePageReducer;