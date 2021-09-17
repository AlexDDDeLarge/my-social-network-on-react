import React from "react";
import style from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  let className = "";

  if (props.type === "toMe") {
    className = `${style.message} ${style.toMe}`;
  }
  if (props.type === "fromMe") {
    className = `${style.message} ${style.fromMe}`;
  }
  if (props.type === "forwarded") {
    className = `${style.message} ${style.forwared}`;
  }
  if (props.type === "replyToMe") {
    className = `${style.message} ${style.replyToMe}`;
  }
  if (props.type === "replyFromMe") {
    className = `${style.message} ${style.replyFromMe}`;
  }

  return (
    <div id={props.messageId} className={className}>
      {props.text}
    </div>
  );
};

export default ChatMessage;
