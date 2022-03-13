import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultImage from "../../../assets/images/user.jpg";

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
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcXfUyzol2ReqCMbBvR8Pb1PIfjHrilHYiA&usqp=CAU"
            src={
              (photos.large) ? 
                photos.large
                :defaultImage
            }
            alt="avatar"
          />
        </div>
        <h1 className={style.fullName}>{fullName}</h1>
        <div className={style.info}>
          <p><b>About me</b></p>
        </div>
        
      </div> 
    )
}

export default ProfileInfo;
