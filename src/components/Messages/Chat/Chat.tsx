import React from "react";
import { connect } from "react-redux";
import { MessageChatType, sendMessage } from "../../../redux/messagesPageReducer";
import { AppStateType } from "../../../redux/reduxStore";
import style from './Chat.module.css'
import ChatMessage from './ChatMessage/ChatMessage';
import SendMessageForm from "./SendMessageForm/SendMessageForm";

type MapStatePropsType = {}

type MapDispatchPropsType = {
  sendMessage: (newMessageBody: string, dialogWithUser: string) => void
}

type OwnPropsType = {
  userId: string
  messages: Array<MessageChatType>
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

export type SendMessageFormDataType = {
  newMessageBody: string
  userId: string
}

const Chat: React.FC<PropsType> = (props) => {
  let onSubmit = (formData: any) => {
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

let mapStateToProps = (state: AppStateType, ownProps: OwnPropsType): MapStatePropsType & OwnPropsType => {
  return {
    userId: ownProps.userId,
    messages: ownProps.messages
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
  (mapStateToProps, {sendMessage})(Chat);