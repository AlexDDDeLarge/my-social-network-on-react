import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../../redux/messagesPageReducer";
import style from './Chat.module.css'
import ChatMessage from './ChatMessage/ChatMessage';
import SendMessageForm from "./SendMessageForm/SendMessageForm";

const  Chat = (props) => {
  let onSubmit = formData => {
    console.log(formData)
    props.sendMessage(formData.newMessageBody, props.userId)
  }
  
  return (
    <div id={props.userId} className={style.сhat}>
      <div className={style.chatBox}>
        {props.messages.map(elem => (
          <ChatMessage
            type={elem.type} 
            text={elem.text}
          />
        ))}
      </div>
      <div className={style.inputBox}>
      <SendMessageForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

let mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.user.userId,
    messages: ownProps.user.messages
  }
}

export default connect(mapStateToProps, {sendMessage})(Chat);