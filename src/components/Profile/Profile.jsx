import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div className={ style.content__bg }></div>
      <ProfileInfo isOwner={props.isOwner} 
        profile={props.profile} 
        status={props.status} 
        updateStatus={props.updateStatus}
        setNewAvatar={props.setNewAvatar}
        isFetching={props.isFetching} />
      <MyPosts/>
    </div>
  )
}

export default Profile;