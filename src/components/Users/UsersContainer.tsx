import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { AppStateType } from "../../redux/reduxStore";
import { getCurrentPageSelector, getFollowingInProgressSelector, 
  getIsFetchingSelector, getPageSizeSelector, 
  getTotalPageCountSelector, getUsersPortionSize, getUsersSelector, //getUsersSelectorSuper 
} from "../../redux/users-selectors";
import { changePage, requestSearchUser, requestUsers,
  setFirstPage,
  toggleFollowing
} from "../../redux/usersPageReducer";
import { UserType } from "../../types/types";
import Users from "./Users";

type MapStatePropsType = {
  page: number 
  count: number
  users: Array<UserType>  
  totalCount: number
  isFetching: boolean
  followingInProgress: number[]
  portionSize: number
} 

type MapDaispatchPropsType = {
  requestSearchUser: (userName: string, count: number, page: number) => void
  toggleFollowing: (id: number, isFollow: boolean) => void
  changePage: (page: number) => void
  requestUsers: (page: number, count: number) => void
  setFirstPage: () => void
}

type OwnPropsType = {
// here types are defined to own component props
}

type PropsType = MapStatePropsType & MapDaispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

  constructor (props: PropsType) {
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

  onPageChanged = (page: number): void => {
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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

export default compose<React.ComponentClass>(
  connect
    <MapStatePropsType, MapDaispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
    requestUsers,
    toggleFollowing,
    changePage,
    requestSearchUser,
    setFirstPage
  }),
  withAuthRedirect
)(UsersContainer);
