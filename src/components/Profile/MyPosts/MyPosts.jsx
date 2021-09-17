import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let PostsConstructor = function (id, likeCount, text) {
    this.id = id;
    this.likeCount = likeCount;
    this.text = text;
  }

  let postsData = [
    new PostsConstructor("p1", 12, "Медитация - круто."),
    new PostsConstructor("p2", 500, "Наруто - это круто.")
  ]

  let postsElements = postsData.map(elem => <Post postId={elem.id} text={elem.text} likesCount={elem.likeCount} />);

  return (
    <div>
      My posts
      <div className={style.addPost}>
        <textarea
          className={style.textArea}
          name=""
          id=""
          placeholder="Text of your post"></textarea>
        <button>Add a new post</button>
      </div>
      <div className={style.posts}>
        {postsElements}
        {/* <Post postId="" text="Медитация - круто." likecount="12"/> */}
      </div>
    </div>
  )
}

export default MyPosts;