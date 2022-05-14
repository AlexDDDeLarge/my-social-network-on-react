import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import defaultImage from "../../../assets/images/user.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ContactItem from "./ContactItem/ContactItem";

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
        <div className={style.nameContainer}>
          <div className={style.avatarWrapper}>
            <img 
              className={style.avatar}
              src={
                (photos.large) ? photos.large : defaultImage
              }
              alt="avatar"
            />
          </div>
          <h1 className={style.fullName}>{fullName && fullName}</h1>
        </div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        <div className={style.info}>
          {aboutMe && <div><span>About me:</span><p>{aboutMe}</p></div>}
          {lookingForAJob && <div><span>Loking for a job:</span><p>Yes</p></div>}
          {lookingForAJobDescription && <div><span>Job requirements:</span><p>{lookingForAJobDescription}</p></div>}
          <div>
            {(contacts && facebook || instagram 
              || twitter || youtube || vk || github 
              || website || mainLink) && <span>Contacts</span>}
            {facebook && <ContactItem source={"Facebook"} link={facebook} />}
            {instagram && <ContactItem source={"Instagram"} link={instagram} />}
            {twitter && <ContactItem source={"Twitter"} link={twitter} />}
            {youtube && <ContactItem source={"YouTube"} link={youtube} />}
            {vk && <ContactItem source={"Vk"} link={vk} />}
            {github && <ContactItem source={"Github"} link={github} />}
            {website && <ContactItem source={"Website"} link={website} />}
            {mainLink && <ContactItem source={"Main Link"} link={mainLink} />}
          </div>
        </div>
        
      </div> 
    )
}

export default ProfileInfo;
