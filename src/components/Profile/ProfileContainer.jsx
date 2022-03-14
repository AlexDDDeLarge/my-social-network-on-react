import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { setUser } from "../../redux/profilePageReducer";
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
    this.props.setUser(userId);
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

export default compose(
  connect(mapStateToProps, {setUser}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

// let RerirectContainer = withAuthRedirect(ProfileContainer);

// let withUrlDataContainerComponent = withRouter(RerirectContainer);

// export default connect(mapStateToProps, {setUser})(withUrlDataContainerComponent);