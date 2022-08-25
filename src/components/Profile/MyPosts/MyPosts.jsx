import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profilePageReducer";
import style from "./MyPosts.module.css";
import NewPostForm from "./NewPostForm/NewPostForm";
import Post from "./Post/Post";

const MyPosts = React.memo( props => {
  let onSubmit = formData => {
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

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

export default connect(mapStateToProps, {addPost})(MyPosts);
