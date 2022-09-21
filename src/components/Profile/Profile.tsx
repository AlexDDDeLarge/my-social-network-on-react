import React from "react";
import { ProfileType } from "../../types/types";
import MyPosts from "./MyPosts/MyPosts";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
  isOwner: boolean
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
  setNewAvatar: (newAvatar: any) => void
  isFetching: boolean
}

const Profile: React.FC<PropsType> = (props) => {
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