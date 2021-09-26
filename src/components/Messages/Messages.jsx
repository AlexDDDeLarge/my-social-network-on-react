import React from "react";
import { Route } from "react-router";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";
import style from "./Messages.module.css";

const Messages = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map(function (elem) {
    return (
      <Dialog
        path={elem.userId}
        firstName={elem.firstName}
        lastName={elem.lastName}
      />
    );
  });

  let chatElements = props.messagesPage.dialogs.map(function (elem) {
    return (
      <Route exact path={`/messages/${elem.userId}`}>
        <Chat 
          dialogWithUser={elem.userId}
          messages={elem.messages} 
          newMessageCurrentText={props.messagesPage.newMessageCurrentText} 
          dispatch={props.dispatch}
        />
      </Route>
    );
  });

  return (
    <div className={style.Messages}>
      <div className={style.dialogs}>
        {dialogsElements}
      </div>
      {chatElements}
    </div>
  );
};

export default Messages;
