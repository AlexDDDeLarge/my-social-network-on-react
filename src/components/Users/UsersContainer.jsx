import React from "react";
import { connect } from "react-redux";
import { 
  follow, 
  unfollow, 
  setUsers, 
  setTotalCount, 
  changePage, 
  isFetchingCompleted
} from "../../redux/usersPageReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.isFetchingCompleted(true);
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`, {
        withCredentials: true
      }
    )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.isFetchingCompleted(false);
      })
  }

  onPageChanged = (page) => {
    this.props.changePage(page);
    this.props.isFetchingCompleted(true);
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`, {
        withCredentials: true
      }
    )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.isFetchingCompleted(false);
      })
  }

  render() {
    return <Users
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      totalCount={this.props.totalCount}
      count={this.props.count}
      page={this.props.page}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      changePage={this.props.changePage}
      isFetching={this.props.isFetching}
    />
  }
} 

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    count: state.usersPage.count,
    page: state.usersPage.page,
    isFetching: state.usersPage.isFetching
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow(userId) {
//       dispatch( followAC(userId) );
//     },
//     unfollow(userId) {
//       dispatch( unfollowAC(userId) );
//     },
//     setUsers(users) {
//       dispatch( setUsersAC(users) );
//     },
//     setTotalCount(totalCount) {
//       dispatch( setTotalCountAC(totalCount) );
//     },
//     changePage(pageNumber) {
//       dispatch( changePageAC(pageNumber) );
//     },
//     isFetchingCompleted(isFetching) {
//       dispatch( isFetchingCompletedAC(isFetching) );
//     }
//   }
// }

// {
//   follow: followAC,
//   unfollow: unfollowAC,
//   setUsers: setUsersAC,
//   setTotalCount: setTotalCountAC,
//   changePage: changePageAC,
//   isFetchingCompleted: isFetchingCompletedAC
// }

export default connect(mapStateToProps, {
  follow, 
  unfollow, 
  setUsers, 
  setTotalCount, 
  changePage, 
  isFetchingCompleted
})(UsersContainer);