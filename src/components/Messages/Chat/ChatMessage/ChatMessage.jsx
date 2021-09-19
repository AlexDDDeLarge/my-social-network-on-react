import React from "react";
import style from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  let className;

  if (props.type === "toMe") {
    className = `${style.message} ${style.toMe} ${style.to}`;
  }
  if (props.type === "fromMe") {
    className = `${style.message} ${style.fromMe} ${style.from}`;
  }
  if (props.type === "forwardedToMe") {
    className = `${style.message} ${style.forwaredToMe} ${style.to} ${style.forwared}`;
  }
  if (props.type === "forwardedFromMe") {
    className = `${style.message} ${style.forwaredFromMe} ${style.from} ${style.forwared}`;
  }
  if (props.type === "replyToMe") {
    className = `${style.message} ${style.replyToMe} ${style.to} ${style.reply}`;
  }
  if (props.type === "replyFromMe") {
    className = `${style.message} ${style.replyFromMe} ${style.from} ${style.reply}`;
  }

  return (
    <div id={props.messageId} className={className}>
      {props.text}
    </div>
  );
};

export default ChatMessage;
