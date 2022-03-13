import React from "react";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
  }
};

let rerirectContainer = withAuthRedirect(Messages);

const MessagesContainer = connect(mapStateToProps, null) (rerirectContainer);

export default MessagesContainer;
