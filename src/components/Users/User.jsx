import React from "react";
import styles from "./Users.module.css";
import userDefaultPic from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgress, toggleFollowing}) => {
  return (
    <div className={styles.item} key={user.id}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          className={styles.avatar}
          src={
            (user.photos.small == true)
              ? user.photos.small
              : userDefaultPic
          }
        />
      </NavLink>
      <br/>
      {
        user.followed ? 
          <button 
            disabled={followingInProgress.some(id => id === user.id)} 
            onClick={() => toggleFollowing(user.id, false)}
          >
            Unfollow
          </button> 
          : <button 
            disabled={followingInProgress.some(id => id === user.id)} 
            onClick={() => toggleFollowing(user.id, true)}
          >
            Follow
          </button> 
      }
      <p>{user.name}</p>
      <p>{user.status}</p>
    </div>
  )
};

export default User;