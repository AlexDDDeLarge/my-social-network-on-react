import React from 'react';
import style from './Chat.module.css'
import ChatMessage from './ChatMessage/ChatMessage';
import { UpdateNewMessageCurrentTextCreator, SendMessageCreator } from "./../../../redux/state";

const Chat = (props) => {
  let messages = props.messages.map(function (elem) {
  return (
    <ChatMessage messageId={`${elem.dialogWithUser}${elem.messageId}`} type={elem.type} text={elem.text}/>
  )
  });

  let textOfNewMessage = React.createRef();

  let updateText = () => {
    let text = textOfNewMessage.current.value;
    let action = new UpdateNewMessageCurrentTextCreator(text)
    props.dispatch(action)
  };

  let addNewMessages = () => {
    let messageId = "message" + "1";
    let text = textOfNewMessage.current.value;
    let action = new SendMessageCreator(messageId, props.dialogWithUser, text);
    props.dispatch(action);
  }  

  return (
    <div id={props.userId} className={style.сhat}>
      <div className={style.chatBox}>
        {messages}
      </div>
      <div className={style.inputBox}>
        <textarea
          value={props.newMessageCurrentText}
          ref={ textOfNewMessage }
          onChange = { updateText }
          cols="30" 
          rows="10" 
          placeholder="Enter message text"></textarea>
        <button onClick={ addNewMessages }>
          Add a new message
        </button>
      </div>
    </div>
  )
}

export default Chat;