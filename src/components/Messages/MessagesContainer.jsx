import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
};

export default compose(
  connect(mapStateToProps, null),
  withAuthRedirect
)(Messages);

// let RerirectContainer = withAuthRedirect(Messages);

// const MessagesContainer = connect(mapStateToProps, null) (RerirectContainer);

// export default MessagesContainer;
