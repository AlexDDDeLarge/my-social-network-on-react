import React from 'react';
import style from './Chat.module.css'
import ChatMessage from './ChatMessage/ChatMessage';

const  Chat = (props) => {
  let messages = props.user.messages.map(function (elem) {
    return (
      <ChatMessage
        messageId={`${elem.dialogWithUser}${elem.messageId}`} 
        type={elem.type} 
        text={elem.text}
      />
    )
  });
  
  let onUpdateText = (evt) => {
    let text = evt.target.value;
    props.updateText(text);
  };

  let onAddNewMessages = (evt) => {
    let messageId = "message" + "1";
    props.addNewMessages(messageId);
  }; 

  
  return (
    <div id={props.userId} className={style.сhat}>
      <div className={style.chatBox}>
        {messages}
      </div>
      <div className={style.inputBox}>
        <textarea
          value={props.newMessageCurrentText}
          onChange={ onUpdateText }
          placeholder="Enter message text"></textarea>
        <button onClick={ onAddNewMessages }>
          Add a new message
        </button>
      </div>
    </div>
  )
}

export default Chat;