import React from "react";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Preloader/Paginator/Paginator";
import User from "../User/User";
import UserSearch from "./UserSearch/UserSearch";
import { UserType } from "../../types/types";

type PropsType = {
  page: number
  onPageChanged: (pageNumber: number) => void
  totalCount: number
  count: number
  users: Array<UserType>
  followingInProgress: boolean
  toggleFollowing: () => void
  portionSize: number
  requestSearchUser: () => void
  isFetching: boolean
  changePage: (page: number) => void
}

const Users: React.FC<PropsType> = ({
  page, 
  onPageChanged, 
  totalCount, 
  count, 
  users, 
  followingInProgress, 
  toggleFollowing, 
  portionSize,  
  requestSearchUser,
  isFetching,
  ...props}) => {
  return (
    <div className={styles.users}>
      <UserSearch page={page} count={count} requestSearchUser={requestSearchUser} />
      <Paginator page={page} onPageChanged={onPageChanged} 
        totalCount={totalCount} count={count} portionSize={portionSize}/>

      {isFetching == true && <Preloader/>}
      
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