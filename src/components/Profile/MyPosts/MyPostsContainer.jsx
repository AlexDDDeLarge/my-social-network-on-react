import React from "react";
import { updateCurrentTextOfTheNewPostActionConstructor, addPostActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onChangeArea = (text) => {
    let action = updateCurrentTextOfTheNewPostActionConstructor(text);
    props.store.dispatch(action);
  };

  let addNewPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  return (
    <MyPosts 
      posts={state.profilePage.posts} 
      newPostCurrentText={state.profilePage.newPostCurrentText} 
      updateCurrentTextOfTheNewPost={onChangeArea} 
      addPost={addNewPost}
    />
  )
};

export default MyPostsContainer;
