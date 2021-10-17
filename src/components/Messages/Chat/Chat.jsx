import React from 'react';
import style from './Chat.module.css'

const Chat = (props) => {
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
        {props.messages}
      </div>
      <div className={style.inputBox}>
        <textarea
          value={props.newMessageCurrentText}
          onChange = { onUpdateText }
          placeholder="Enter message text"></textarea>
        <button onClick={ onAddNewMessages }>
          Add a new message
        </button>
      </div>
    </div>
  )
}

export default Chat;