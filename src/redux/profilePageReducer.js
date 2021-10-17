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
      state.newPostCurrentText = action.newValue;
      return state;
    case ADD_POST: 
      let newPost = new PostsConstructor("p3", 0, state.newPostCurrentText);
      state.posts.push( newPost );
      state.newPostCurrentText = "";
      return state;
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