import React from "react";
import styles from "./Users.module.css";
import userDefaultPic from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import { UserType } from "../../types/types";

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  toggleFollowing: (id: number, isFollow: boolean) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, toggleFollowing}) => {
  return (
    <div className={styles.item} key={user.id}>
      <NavLink to={`/profile/${user.id}`}>
        <img
          className={styles.avatar}
          src={
            (user.photos.small)
              ? user.photos.small
              : userDefaultPic
          }
        />
      </NavLink>
      <br/>
      {user.followed && <p>Your friend</p>}
      {
        user.followed ? 
          <button 
            disabled={followingInProgress.some(id => id === user.id)} 
            onClick={() => toggleFollowing(user.id, false)}
          >Unfollow
          </button> 
          : <button 
            disabled={followingInProgress.some(id => id === user.id)} 
            onClick={() => toggleFollowing(user.id, true)}
          >Follow
          </button> 
      }
      <p>{user.name}</p>
      <p>{user.status}</p>
    </div>
  )
};

export default User;