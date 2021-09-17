import React from 'react';
import style from './Chat.module.css'
import ChatMessage from './ChatMessage/ChatMessage';

const Chat = (props) => {

  let messages = props.data.map(function (elem) {
    return (
      <ChatMessage messageId={elem.id} type={elem.type} text={elem.text}/>
    )
  })

  return (
    <div id={props.userId} className={style.сhat}>
      <div className={style.chatBox}>
        {messages}
        {/* <ChatMessage type="toMe" text="Hi, Dima. what's cooking good loking?" />
        <ChatMessage type="fromMe" text="Hi, Leyla. I'm fine. What's up?" />
        <ChatMessage type="forwarded" text="A. Forwared" />
        <ChatMessage type="replyToMe" text="B. Reply to me" />
        <ChatMessage type="replyFromMe" text="C. Reply from me" /> */}
      </div>
      <div className={style.inputBox}>
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter message text"></textarea>
      </div>
    </div>
  )
}

export default Chat;