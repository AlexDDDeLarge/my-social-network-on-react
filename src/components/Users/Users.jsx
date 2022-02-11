import React from "react";
import styles from "./Users.module.css";
import userDefaultPic from "../../assets/images/user.jpg";
import preloader from "../../assets/images/Infinity-1s-200px.svg";
import Preloader from "../common/Preloader/Preloader";

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
            <img
              className={styles.avatar}
              src={(el.photos.small == true) ? el.photos.small : userDefaultPic}
            />
            <br/>
            <button 
              onClick={
                () => el.followed ? props.unfollow(el.id) : props.follow(el.id)
              }
            >
              { el.followed ? "Unfollow" : "Follow"}
            </button>
            <p>{el.name}</p>
            <p>{el.status}</p>
          </div>
        })
      }
    </div>
  )
};

export default Users;