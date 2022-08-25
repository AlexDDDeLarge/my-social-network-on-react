import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import { getStatus, setNewAvatar, setUser, updateStatus } from "../../redux/profilePageReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  constructor(props) {
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

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId
      && prevProps.match.params.userId !== this.props.userId) {
      this.refreshProfile()
    }
  }

  render() {
    debugger
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
 
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isFetching: state.profilePage.isFetching
  }
}

export default compose(
  connect(mapStateToProps, {setUser, getStatus, updateStatus, setNewAvatar}),
  withRouter
  // withAuthRedirect
)(ProfileContainer);