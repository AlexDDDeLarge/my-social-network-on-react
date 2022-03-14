import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultImage from "../../../assets/images/user.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStaus";

function ProfileInfo (props) {
  if (!props.profile) {
    return <Preloader/>
  } 
  
  let  {
        profile,
        profile: {
          aboutMe,
          contacts,
          contacts: {
            facebook,
            website,
            vk,
            twitter,
            instagram,
            youtube,
            github,
            mainLink
          },
          lookingForAJob,
          lookingForAJobDescription,
          fullName,
          userId,
          photos
        }
      } = props;

    return (
      <div className={style.mainWrapper}>
        <div className={style.avatarWrapper}>
          <img 
            className={style.avatar}
            src={
              (photos.large) ? photos.large : defaultImage
            }
            alt="avatar"
          />
        </div>
        <h1 className={style.fullName}>{fullName}</h1>
        <ProfileStatus status="I become adult"/>
        <div className={style.info}>
          <p><b>About me</b></p>
        </div>
        
      </div> 
    )
}

export default ProfileInfo;
