import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageCurrentTextCreator } from "../../../redux/messagesPageReducer";
import Chat from "./Chat";

let mapStateToProps = (state, ownProps) => {
  return {
    newMessageCurrentText: state.messagesPage.newMessageCurrentText,
    user: ownProps.user
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateText(text) {
      dispatch( updateNewMessageCurrentTextCreator(text) );
    },
    addNewMessages(messageId) {
      dispatch( sendMessageCreator(messageId, ownProps.user.userId) );
    }
  }
}

let ChatContainer = connect(mapStateToProps, mapDispatchToProps) (Chat);

export default ChatContainer;