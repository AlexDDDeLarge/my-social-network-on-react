import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profilePageReducer";
import { AppStateType } from "../../../redux/reduxStore";
import { PostType } from "../../../types/types";
import style from "./MyPosts.module.css";
import NewPostForm from "./NewPostForm/NewPostForm";
import Post from "./Post/Post";

type MapStatePropsType = {
  posts: Array<PostType>
}

type MapDispatchPropsType = {
  addPost: (newPostBody: string) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

export type NewPostFormDataType = {
  newPostBody: string
}

const MyPosts: React.FC<PropsType> = React.memo( props => {
  let onSubmit = (formData: NewPostFormDataType) => {
    props.addPost(formData.newPostBody)
  }

  return (
    <div>
      My posts
      <div className={style.addPost}>
        <NewPostForm style={style} onSubmit={onSubmit} />
      </div>
      <div className={style.posts}>
        {props.posts.map(elem => (
          <Post key={elem.id} postId={elem.id} text={elem.text} likesCount={elem.likeCount} />
        ))}
      </div>
    </div>
  );
});

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts
  }
}

export default connect
  <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapStateToProps, {addPost})(MyPosts);
