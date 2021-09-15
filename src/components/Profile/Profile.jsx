import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css'

const Profile = (props) => {
  return (
    <div>
        <div className={style.content__bg}></div>
        <div>
          ava+desc
        </div>
        <MyPosts/>
      </div>
  )
}

export default Profile;