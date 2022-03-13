import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loginThunk();
  }

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

export default connect(mapStateToProps, {loginThunk})(HeaderContainer);