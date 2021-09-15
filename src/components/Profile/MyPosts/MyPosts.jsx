import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div className={style.addPost}>
        <textarea className={style.textArea} name="" id="" placeholder="Text of your post"></textarea>
        <button>Add a new post</button>
      </div>
      <div className={style.posts}>
        <Post message="Медитация - круто." likecount="12"/>
        <Post message=" Наруто - это круто." likecount="500"/>
      </div>
    </div>
  )
}

export default MyPosts;