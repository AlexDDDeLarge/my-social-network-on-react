import React from "react";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Preloader/Paginator/Paginator";
import User from "./User";

const Users = ({page, onPageChanged, totalCount, count, users, followingInProgress, toggleFollowing,  ...props}) => {
  return (
    <div className={styles.users}>
      <Paginator page={props.page} onPageChanged={onPageChanged} 
        totalCount={totalCount} count={count} />

      {props.isFetching == true && <Preloader/>}
      
      {users.map(el => (
        <User 
          user={el} key={el.id}
          followingInProgress={followingInProgress} 
          toggleFollowing={toggleFollowing} 
        />
      ))}
    </div>
  )
};

export default Users;