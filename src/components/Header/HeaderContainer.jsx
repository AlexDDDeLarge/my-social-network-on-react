import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { headerAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
    //   withCredentials: true
    // })
    headerAPI.login()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data
          this.props.setAuthUserData(id, email, login);
        }
      })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);