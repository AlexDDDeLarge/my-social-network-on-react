import { PostsConstructor } from "./functionsConstructor"

const UPDATE_CURRENT_TEXT_OF_THE_NEW_POST = "UPDATE-CURRENT-TEXT-OF-THE-NEW-POST";
const ADD_POST = "ADD-POST";

const profilePageReducer = (state, action) => {
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

export const UpdateCurrentTextOfTheNewPostActionConstructor = function (text) {
  this.type = UPDATE_CURRENT_TEXT_OF_THE_NEW_POST;
  this.newValue = text;
}
export const AddPostActionCreator = function () {
  this.type = ADD_POST;
}

export default profilePageReducer;