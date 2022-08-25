import React from "react";
import style from "./ProfileData.module.css"
import ContactItem from "../ContactItem/ContactItem";
import { NavLink } from "react-router-dom";

let ProfileData = ({profile, profile: {
  aboutMe, contacts,
  contacts: {
    facebook, website, vk,
    twitter, instagram, youtube,
    github, mainLink
  },
  lookingForAJob, lookingForAJobDescription, 
  fullName, userId
}, isOwner}) => {
  return (
    <div className={style.info}>
      {isOwner === true && <NavLink to="/editProfile">Edit Profile</NavLink>}
      {aboutMe && <div><span><b>About me:</b></span><p>{aboutMe}</p></div>}
      {lookingForAJob && <div><span><b>Loking for a job:</b></span><p>Yes</p></div>}
      {lookingForAJobDescription && <div><span><b>My professional skills:</b></span><p>{lookingForAJobDescription}</p></div>}
      {/* <div>
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
      </div> */}
      <div>
        {(contacts && facebook || instagram 
          || twitter || youtube || vk || github 
          || website || mainLink) && <span><b>Contacts</b></span>}
          <span>Contacts</span>
          {/* contacts[key] !== null &&  */}
        {Object.keys(contacts).map(key => (
          <ContactItem key={key} source={key} link={contacts[key]} />
        ))}
      </div>
    </div>  
 )
}

export default ProfileData;