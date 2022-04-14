import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div className={ style.content__bg }></div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPosts/>
    </div>
  )
}

export default Profile;