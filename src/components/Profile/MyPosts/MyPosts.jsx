import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((elem) => (
    <Post postId={elem.id} text={elem.text} likesCount={elem.likeCount} />
  ));

  let newPost = React.createRef();

  let onChangeArea = () => {
    let text = newPost.current.value;
    props.updateCurrentTextOfTheNewPost(text);
  };

  let onAddNewPost = () => {
    props.addPost();
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
        <button onClick={ onAddNewPost }>
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
