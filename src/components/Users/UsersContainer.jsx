import React from "react";
import { connect } from "react-redux";
import { 
  follow, 
  unfollow, 
  setUsers, 
  setTotalCount, 
  changePage, 
  isFetchingCompleted,
  toogleIsFollowingProgress,
  getUsers,
  toggleFollowing
} from "../../redux/usersPageReducer";
import Users from "./Users";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    // this.props.isFetchingCompleted(true);
    // usersAPI.getUsers(
    //   this.props.page,
    //   this.props.count
    // )
    //   .then(data => {
    //     this.props.setUsers(data.items);
    //     this.props.setTotalCount(data.totalCount);
    //     this.props.isFetchingCompleted(false);
    //   })
    this.props.getUsers(
      this.props.page,
      this.props.count
    );
  }

  onPageChanged = (page) => {
    this.props.changePage(page);
    this.props.getUsers(
      page,
      this.props.count
    );
    // this.props.changePage(page);
    // this.props.isFetchingCompleted(true); 
    // usersAPI.getUsers(
    //   page,
    //   this.props.count
    // )
    //   .then(data => {
    //     this.props.setUsers(data.items);
    //     this.props.setTotalCount(data.totalCount);
    //     this.props.isFetchingCompleted(false);
    //   })
  }

  render() {
    return <Users
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      totalCount={this.props.totalCount}
      count={this.props.count}
      page={this.props.page}
      // follow={this.props.follow}
      // unfollow={this.props.unfollow}
      changePage={this.props.changePage}
      isFetching={this.props.isFetching}
      //toogleIsFollowingProgress={this.props.toogleIsFollowingProgress}
      followingInProgress={this.props.followingInProgress}
      toggleFollowing={this.props.toggleFollowing}
    />
  }
} 

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    count: state.usersPage.count,
    page: state.usersPage.page,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
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
  getUsers,
  toggleFollowing,
  //follow, 
  //unfollow, 
  //setUsers, 
  //setTotalCount, 
  changePage, 
  //isFetchingCompleted,
  //toogleIsFollowingProgress
})(UsersContainer);