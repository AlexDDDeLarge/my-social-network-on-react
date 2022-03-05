import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUserProfile } from "../../redux/profilePageReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(
      // `https://social-network.samuraijs.com/api/1.0/profile/2`
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    )
      .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);