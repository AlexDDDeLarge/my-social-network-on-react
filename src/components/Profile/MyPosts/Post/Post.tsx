import React from "react";
import style from "./Post.module.css";

type PropsType = {
  postId: string
  text: string
  likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div id={props.postId} className={style.posts__item}>
      {props.text}
      <div>
        <strong>
          <span>{props.likesCount}</span> likes
        </strong>
      </div>
    </div>
  );
};

export default Post;
