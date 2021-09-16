import React from 'react';
import style from './Chat.module.css'
import ChatMessage from './ChatMessage/ChatMessage';

const Chat = (props) => {
  return (
    <div id={props.userId} className={style.сhat}>
      <div className={style.chatBox}>
        <ChatMessage typeOfMessage="toMe" text="Hi, Dima. what's cooking good loking?" />
        <ChatMessage typeOfMessage="fromMe" text="Hi, Leyla. I'm fine. What's up?" />
        <ChatMessage typeOfMessage="forwarded" text="A. Forwared" />
        <ChatMessage typeOfMessage="replyToMe" text="B. Reply to me" />
        <ChatMessage typeOfMessage="replyFromMe" text="C. Reply from me" />
      </div>
      <div className={style.inputBox}>
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter message text"></textarea>
      </div>
    </div>
  )
}

export default Chat;