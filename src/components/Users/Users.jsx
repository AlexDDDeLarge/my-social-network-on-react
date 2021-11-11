import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg"

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      props.setUsers(response.data.items);
    });
  }

  
  return (
    <div className={styles.body}>
      {
        props.users.map( (user) => <div key={user.id}>
          <span>
            <div>
              <img src={ (user.photos.small != null) ? user.photoss.small : userPhoto} className={styles.userPicture}/>
            </div>
            <div>
              { user.followed
                ? <button onClick={() => { props.unfollow(user.id) } }>Unfollow</button> 
                : <button onClick={() => { props.follow(user.id) }}>Follow</button> }
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
               <div>{"user.location.city"}</div>
              <div>{"user.location.country"}</div>
            </span>
          </span>
        </div> )
      }
    </div>
  )
}

export default Users; 