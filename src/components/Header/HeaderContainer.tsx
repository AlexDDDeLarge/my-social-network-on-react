import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { loginThunk, logout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/reduxStore";
import Header from "./Header";

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  logout: () => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class HeaderContainer extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.loginThunk();
  // }

  render() {
    return  <Header {...this.props}/>
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default compose<React.ComponentClass>(
  withRouter,
  connect
    <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {logout})
)(HeaderContainer);