import React from 'react';
import style from './ChatMessage.module.css'

const ChatMessage = (props) => {
  // sourceOfMessage = [
  //   " toMe",
  //   " fromMe",
  //   "forwarded",
  //    "replyToMe",
  //    "replyFromMe",
  // ]
  let className = "";

  if (props.typeOfMessage === "toMe") {
    className = `${style.message} ${style.toMe}`;

  } if (props.typeOfMessage === "fromMe") {
    className = `${style.message} ${style.fromMe}`;

  } if (props.typeOfMessage === "forwarded") {
    className = `${style.message} ${style.forwared}`;

  } if (props.typeOfMessage ===  "replyToMe") {
    className = `${style.message} ${style.replyToMe}`;

  } if (props.typeOfMessage ===  "replyFromMe") {
    className = `${style.message} ${style.replyFromMe}`;
    
  } 

  return (
    <div className={className}>
      {props.text}
    </div>

    // <p className="chatMessage toMe">Hi, Dima. what's cooking good loking?</p>
    // <p className="chatMessage fromMe">Hi, Leyla. I'm fine. What's up?</p>
  )
}

export default ChatMessage;