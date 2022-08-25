import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultImage from "../../../assets/images/user.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
// import ContactItem from "./ContactItem/ContactItem";
// import { NavLink } from "react-router-dom";
import ProfileData from "./ProfileData/ProfileData";

function ProfileInfo (props) {
  if (!props.profile) {
    return <Preloader />
  } 
  
  let  {
    isOwner, setNewAvatar, isFetching,
    profile, profile: {
      aboutMe, lookingForAJob, lookingForAJobDescription, 
      fullName, userId
    }
  } = props;

  let onAvatacrSelected = (e) => {
    if (e.target.files.length) setNewAvatar(e.target.files[0]);
  }

  return (
    <div className={style.mainWrapper}>
      <div className={style.nameContainer}>
        <div className={style.avatarWrapper}>
          {isFetching ? <Preloader /> : <img 
            className={style.avatar}
            src={
              (profile.photos.large) ? profile.photos.large : defaultImage
            }
            alt="avatar"
          />}
        </div>
        <h1 className={style.fullName}>{fullName && fullName}</h1>
      </div>
      {isOwner && <input type='file' onChange={onAvatacrSelected}/>}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <ProfileData profile={profile} isOwner={isOwner} />
    </div> 
  )
}

export default ProfileInfo;
