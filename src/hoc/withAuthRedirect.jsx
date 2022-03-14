import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let withAuthRedirect = (WrapperedComponent) => {
  class AuthRedirectWrapper extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login"/>;
      return <WrapperedComponent {...this.props}/>;
    }
  }

  let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
  });

  return connect(mapStateToProps, null)(AuthRedirectWrapper);
}

export default withAuthRedirect;