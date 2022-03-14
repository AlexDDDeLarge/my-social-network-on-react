import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { 
  changePage, 
  getUsers,
  toggleFollowing
} from "../../redux/usersPageReducer";
import Users from "./Users";

class UsersContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
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
  }

  render() {
    return <Users
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      totalCount={this.props.totalCount}
      count={this.props.count}
      page={this.props.page}
      changePage={this.props.changePage}
      isFetching={this.props.isFetching}
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

export default compose(
  connect(mapStateToProps, {
    getUsers,
    toggleFollowing,
    changePage
  }),
  withAuthRedirect
)(UsersContainer);

// let RerirectContainer = withAuthRedirect(UsersContainer);
// export default connect(mapStateToProps, {
//   getUsers,
//   toggleFollowing,
//   changePage
// })(RerirectContainer);

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

