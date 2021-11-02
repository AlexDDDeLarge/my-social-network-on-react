import React from "react";
import { connect } from "react-redux";
import { updateCurrentTextOfTheNewPostActionConstructor, addPostActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts, 
    newPostCurrentText: state.profilePage.newPostCurrentText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentTextOfTheNewPost(text) {
      dispatch(updateCurrentTextOfTheNewPostActionConstructor(text));
    },
    addPost() {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;
