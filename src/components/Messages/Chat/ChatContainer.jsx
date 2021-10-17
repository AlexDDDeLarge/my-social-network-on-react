import React from 'react';
import ChatMessage from './ChatMessage/ChatMessage';
import { updateNewMessageCurrentTextCreator, sendMessageCreator } from "./../../../redux/messagesPageReducer";
import Chat from './Chat';

const ChatContainer = (props) => {
  let messages = props.user.messages.map(function (elem) {
    return (
      <ChatMessage 
        messageId={`${elem.dialogWithUser}${elem.messageId}`} 
        type={elem.type} 
        text={elem.text}
      />
    )
  });

  let updateText = (text, evt = evt) => {
    let action = updateNewMessageCurrentTextCreator(text)
    props.dispatch(action)
  };

  let addNewMessages = (messageId, evt = evt) => {
    let action = sendMessageCreator(messageId, props.user.userId);
    props.dispatch(action);
  };

  return (
    <Chat 
      userId={props.user.userId}
      messages={messages}
      newMessageCurrentText={props.store.getState().messagesPage.newMessageCurrentText}
      updateText={updateText}
    />
  )
}

export default ChatContainer;