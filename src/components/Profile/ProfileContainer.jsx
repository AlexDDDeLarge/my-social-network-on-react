import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
// import withAuthRedirect from "../../hoc/withAuthRedirect";
import { getStatus, setUser, updateStatus } from "../../redux/profilePageReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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

  componentDidUpdate() {
    let userId = this.props.match.params.userId;
    this.props.setUser(userId);
    this.props.getStatus(userId);
  }

  render() {
    // if (!this.props.userId && !this.props.match.params.userId) return <Redirect to="/login" />
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}
 
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
  }
}

export default compose(
  connect(mapStateToProps, {setUser, getStatus, updateStatus}),
  withRouter
  // withAuthRedirect
)(ProfileContainer);