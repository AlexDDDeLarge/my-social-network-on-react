import React from "react";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.userPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);