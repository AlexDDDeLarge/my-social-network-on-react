import React from "react";
import styles from "./Users.module.css";
import userDefaultPic from "../../assets/images/user.jpg";
import Preloader from "../common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {

  // let pagesCount = Math.ceil(props.totalCount / props.count);
  let pages = [];
  for (let i = 1; i <= 15; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <div>
        {
          pages.map(number => {
            return (
              <span
                className={(props.page === number) ? styles.currentPage: ""}
                onClick={(e) => { props.onPageChanged(number) }}
              >
              {`${number} `} 
              </span>
            )
          })
        }
      </div>
      {props.isFetching == true && <Preloader/>}
      
      {
        props.users.map(el => {
          return <div className={styles.item} key={el.id}>
            <NavLink to={`/profile/${el.id}`}>
              <img
              className={styles.avatar}
              src={
                (el.photos.small == true)
                  ? el.photos.small
                  : userDefaultPic
              }
            />
            </NavLink>
            <br/>
            {/* <button 
              onClick={
                () => el.followed ? props.unfollow(el.id) : props.follow(el.id)
              }
            >
              { el.followed ? "Unfollow" : "Follow"}
            </button> */}
            {
              el.followed ? 
                <button 
                  disabled={props.followingInProgress.some(id => id === el.id)} 
                  onClick={() => {
                    props.toggleFollowing(el.id, false);
                    // props.toogleIsFollowingProgress(true, el.id);
                    // usersAPI.unfollow(el.id)
                    //   .then(data => {
                    //     if (data.resultCode == 0) {
                    //       props.unfollow(el.id);
                    //     }
                    //     props.toogleIsFollowingProgress(false, el.id);
                    //   })
                }}>Unfollow</button> 
                : <button 
                  disabled={props.followingInProgress.some(id => id === el.id)} 
                  onClick={() => {
                    props.toggleFollowing(el.id, true);
                    // props.toogleIsFollowingProgress(true, el.id);
                    // usersAPI.follow(el.id)
                    //   .then(data => {
                    //     if (data.resultCode == 0) {
                    //       props.follow(el.id);
                    //     }
                    //     props.toogleIsFollowingProgress(false, el.id);
                    //   })
                }}>Follow</button> 
            }
            <p>{el.name}</p>
            <p>{el.status}</p>
          </div>
        })
      }
    </div>
  )
};

export default Users;