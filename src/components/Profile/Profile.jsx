import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
        <div className={style.content__bg}></div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}/>
      </div>
  )
}

export default Profile;