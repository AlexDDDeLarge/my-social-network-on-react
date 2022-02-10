import React from "react";
import styles from "./Users.module.css";
import userDefaultPic from "../../assets/images/user.jpg"
import * as axios from "axios";

class Users extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`
    )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      })
  }

  onPageChanged = (page) => {
    this.props.changePage(page);
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`
    )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.count);
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
                  className={(this.props.page === number) ? styles.currentPage: ""}
                  onClick={(e) => { this.onPageChanged(number) }}
                >
                {`${number} `} 
                </span>
              )
            })
          }
        </div>
        {
          this.props.users.map(el => {
            return <div className={styles.item} key={el.id}>
              <img
                className={styles.avatar}
                src={(el.photos.small == true) ? el.photos.small : userDefaultPic}
              />
              <br/>
              <button 
                onClick={
                  () => el.followed ? this.props.unfollow(el.id) : this.props.follow(el.id)
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
  }
} 

export default Users;

/* const Users = props => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=2`)
        .then(response => props.setUsers(response.data.items))    
    }
  };
  
  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {
        props.users.map(el => {
          return <div className={styles.item} key={el.id}>
            <img
              className={styles.avatar}
              src={(el.photos.small == true) ? el.photos.small : userDefaultPic}
            />
            <br/>
            <button onClick={() => el.followed ? props.unfollow(el.id) : props.follow(el.id)}>
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

export default Users; */

    /* props.setUsers(
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
    ); */

    {/* <div>
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
    </div> */}
