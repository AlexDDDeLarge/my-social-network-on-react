import React from "react";
import style from './ProfileInfo.module.css'

function ProfileInfo (props) {
  return (
    <div className={style.mainWrapper}>
      <div className={style.avatarWrapper}>
        <img 
          className={style.avatar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcXfUyzol2ReqCMbBvR8Pb1PIfjHrilHYiA&usqp=CAU"
          alt="avatar"
        />
      </div>
      
    </div>
  )
}

export default ProfileInfo;
