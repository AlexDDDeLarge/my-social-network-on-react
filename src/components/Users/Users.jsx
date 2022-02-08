import React from "react";
import styles from "./Users.module.css";
import userDefaultPic from "../../assets/images/user.jpg"

const Users = props => {

  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          fullName: "Leyla A",
          status: "I will return soon",
          location: {
            country: "Russia",
            city: "Moscow"
          },
          avatar: false,
          isFollowed: true
        },
        {
          id: 2,
          fullName: "Emil T",
          status: "I will return someday",
          location: {
            country: "Russia",
            city: "Moscow"
          },
          avatar: false,
          isFollowed: false
        }
      ]
    );
  }
  
  return (
    <div>
      {
        props.users.map(el => {
          return <div className={styles.item} key={el.id}>
            <img
              className={styles.avatar}
              src={(el.avatar == true) ? el.avatar : userDefaultPic}
            />
            <br/>
            <button onClick={() => el.isFollowed ? props.unfollow(el.id) : props.follow(el.id)}>
              { el.isFollowed ? "Unfollow" : "Follow"}
            </button>
            <p>{el.fullName}</p>
            <p>{el.status}</p>
            <p>{el.location.country}</p>
            <p>{el.location.city}</p>
          </div>
        })
      }
    </div>
  )
};

export default Users;