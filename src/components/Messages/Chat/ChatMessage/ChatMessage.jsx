import React from "react";
import style from "./ChatMessage.module.css";

const ChatMessage = (props) => {
  let className;

  switch (props.type) {
    case "toMe":
      className = `${style.message} ${style.toMe} ${style.to}`;
      break
    case "fromMe":
      className = `${style.message} ${style.fromMe} ${style.from}`;
      break
    case "forwardedToMe":
      className = `${style.message} ${style.forwaredToMe} ${style.to} ${style.forwared}`;
      break
    case "forwardedFromMe":
      className = `${style.message} ${style.forwaredFromMe} ${style.from} ${style.forwared}`;
      break
    case "replyToMe":
      className = `${style.message} ${style.replyToMe} ${style.to} ${style.reply}`;
      break
    case "replyFromMe":
      className = `${style.message} ${style.replyFromMe} ${style.from} ${style.reply}`;
      break
  }

  return (
    <div id={props.messageId} className={className}>
      {props.text}
    </div>
  );
};

export default ChatMessage;
