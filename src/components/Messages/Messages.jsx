import React from "react";
import { Route } from "react-router";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";
import style from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={style.Messages}>
      <div className={style.dialogs}>
        {props.dialogsElements}
      </div>
      {props.chatElements}
    </div>
  );
};

export default Messages;
