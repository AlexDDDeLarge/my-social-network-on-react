import React from 'react';
import style from './Chat.module.css'
import ChatMessage from './ChatMessage/ChatMessage';

const Chat = (props) => {
  let messages = props.messages.map(function (elem) {
  return (
    <ChatMessage messageId={`${elem.dialogWithUser}${elem.messageId}`} type={elem.type} text={elem.text}/>
  )
  });

  return (
    <div id={props.userId} className={style.сhat}>
      <div className={style.chatBox}>
        {messages}
      </div>
      <div className={style.inputBox}>
        <textarea name="" id="" cols="30" rows="10" placeholder="Enter message text"></textarea>
      </div>
    </div>
  )
}

export default Chat;