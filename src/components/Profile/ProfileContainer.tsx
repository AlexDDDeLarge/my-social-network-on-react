import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import { getStatus, setNewAvatar, setUser, updateStatus } from "../../redux/profilePageReducer";
import { AppStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../types/types";
import Profile from "./Profile";

type MapStatePropsType = {
  profile: ProfileType
  status: string
  userId: number
  isFetching: boolean
}

type MapDispatchPropsType = {
  setUser: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  setNewAvatar: (newAvatar: any) => void
}

type OwnPropsType = {
  history: any
  match: any
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 2;
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.setUser(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: PropsType) {
    if (prevProps.match.params.userId !== this.props.match.params.userId
      && prevProps.match.params.userId !== this.props.userId) {
      this.refreshProfile()
    }
  }

  render() {
    // if (!this.props.userId && !this.props.match.params.userId) return <Redirect to="/login" />
    return (
      <Profile {...this.props}
        isOwner={
          ((this.props.match.params.userId == this.props.userId) 
          || !this.props.match.params.userId
        )}
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus}
        setNewAvatar={this.props.setNewAvatar}
        isFetching={this.props.isFetching} />
    )
  }
}
 
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile as ProfileType,
    status: state.profilePage.status,
    userId: state.auth.userId as number,
    isFetching: state.profilePage.isFetching
  }
}

export default compose<React.ComponentClass>(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {setUser, getStatus, updateStatus, setNewAvatar}),
  withRouter
  // withAuthRedirect
)(ProfileContainer);