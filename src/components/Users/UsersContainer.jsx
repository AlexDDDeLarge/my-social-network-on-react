import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setTotalCountAC, changePageAC } from "../../redux/usersPageReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    count: state.usersPage.count,
    page: state.usersPage.page
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow(userId) {
      dispatch( followAC(userId) );
    },
    unfollow(userId) {
      dispatch( unfollowAC(userId) );
    },
    setUsers(users) {
      dispatch( setUsersAC(users) );
    },
    setTotalCount(totalCount) {
      dispatch( setTotalCountAC(totalCount) );
    },
    changePage(pageNumber) {
      dispatch( changePageAC(pageNumber) );
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;