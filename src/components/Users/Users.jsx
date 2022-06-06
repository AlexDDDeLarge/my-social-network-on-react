import React from "react";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Preloader/Paginator/Paginator";
import User from "../User/User";
import UserSearch from "./UserSearch/UserSearch";

const Users = ({page, 
  onPageChanged, 
  totalCount, 
  count, 
  users, 
  followingInProgress, 
  toggleFollowing, 
  portionSize,  
  requestSearchUser,
  ...props}) => {
  return (
    <div className={styles.users}>
      <UserSearch page={page} count={count} requestSearchUser={requestSearchUser} />
      <Paginator page={page} onPageChanged={onPageChanged} 
        totalCount={totalCount} count={count} portionSize={portionSize}/>

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