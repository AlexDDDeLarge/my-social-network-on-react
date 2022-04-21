import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { loginThunk, logout } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.loginThunk();
  // }

  render() {
    return  <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {logout})
)(HeaderContainer);

// export default connect(mapStateToProps, {logout})(HeaderContainer);