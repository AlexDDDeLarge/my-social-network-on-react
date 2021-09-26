import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { UpdateCurrentTextOfTheNewPostActionConstructor, AddPostActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.posts.map((elem) => (
    <Post postId={elem.id} text={elem.text} likesCount={elem.likeCount} />
  ));

  let newPost = React.createRef();

  let onChangeArea = () => {
    let text = newPost.current.value;
    let action = new UpdateCurrentTextOfTheNewPostActionConstructor(text);
    props.dispatch(action);
  };

  let addNewPost = () => {
    let action = new AddPostActionCreator()
    props.dispatch(action);
  };

  return (
    <div>
      My posts
      <div className={style.addPost}>
        <textarea
          ref={ newPost }
          className={style.textArea}
          value={ props.newPostCurrentText }
          placeholder="Text of your post"
          onChange={ onChangeArea }
        />
        <button onClick={ addNewPost }>
          Add a new post
        </button>
      </div>
      <div className={style.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
