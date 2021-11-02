import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
        <div className={ style.content__bg }></div>
        <ProfileInfo/>
        <MyPostsContainer/>
      </div>
  )
}

export default Profile;