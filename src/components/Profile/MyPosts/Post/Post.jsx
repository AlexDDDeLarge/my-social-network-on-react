import React from "react";
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.posts__item}>
      {props.message}
      <div>
        <strong><span>{props.likecount}</span> likes</strong>
      </div>
    </div>      
  )
}

export default Post;