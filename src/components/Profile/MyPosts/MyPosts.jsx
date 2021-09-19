import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((elem) => (
    <Post postId={elem.id} text={elem.text} likesCount={elem.likeCount} />
  ));

  return (
    <div>
      My posts
      <div className={style.addPost}>
        <textarea
          className={style.textArea}
          name=""
          id=""
          placeholder="Text of your post"
        ></textarea>
        <button>Add a new post</button>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
