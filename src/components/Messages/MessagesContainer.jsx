import React from "react";
import { Route } from "react-router";
import Chat from "./Chat/Chat";
import ChatContainer from "./Chat/ChatContainer";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages";
import style from "./Messages.module.css";

const MessagesContainer = (props) => {
  let state = props.store.getState();

  let dialogsElements = state.messagesPage.dialogs.map(function (elem) {
    return (
      <Dialog
        path={elem.userId}
        firstName={elem.firstName}
        lastName={elem.lastName}
      />
    );
  });

  let chatElements = state.messagesPage.dialogs.map(function (elem) {
    return (
      <Route exact path={`/messages/${elem.userId}`}>
        <ChatContainer
          user={elem}
          store={props.store}
        />
      </Route>
    );
  });

  return (
    <Messages
      dialogsElements={dialogsElements}
      chatElements={chatElements}
    />
  );
};

export default MessagesContainer;
