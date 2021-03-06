import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { getCurrentPageSelector, getFollowingInProgressSelector, 
  getIsFetchingSelector, getPageSizeSelector, 
  getTotalPageCountSelector, getUsersPortionSize, getUsersSelector, getUsersSelectorSuper 
} from "../../redux/users-selectors";
import { changePage, requestSearchUser, requestUsers,
  setFirstPage,
  toggleFollowing
} from "../../redux/usersPageReducer";
import Users from "./Users";

class UsersContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUsers(
      this.props.page,
      this.props.count
    );
  }

  componentWillUnmount() {
    this.props.setFirstPage();
  }

  onPageChanged = (page) => {
    this.props.changePage(page);
    this.props.requestUsers(
      page,
      this.props.count
    );
  }

  render() {
    console.log("Render")
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
      portionSize={this.props.portionSize}
      requestSearchUser={this.props.requestSearchUser}
    />
  }
} 

let mapStateToProps = (state) => {
  console.log("mStP")
  return {
    users: getUsersSelector(state),
    // users: getUsersSelectorSuper(state),
    totalCount: getTotalPageCountSelector(state),
    count: getPageSizeSelector(state),
    page: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
    portionSize: getUsersPortionSize(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    requestUsers,
    toggleFollowing,
    changePage,
    requestSearchUser,
    setFirstPage
  }),
  withAuthRedirect
)(UsersContainer);
