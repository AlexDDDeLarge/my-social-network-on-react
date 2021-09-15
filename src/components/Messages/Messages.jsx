import React from 'react';
import style from './Messages.module.css'

const Messages = (props) => {
  return (
    <div className={style.Messages}>
      <div className={style.messagesDialogs}>
        <div className={style.dialogsItem}>Leyla</div>
        <div className={style.dialogsitem}>Emil</div>
        <div className={style.dialogsitem}>Sasha</div>
        <div className={style.dialogsitem}>Vlad</div>
        <div className={style.dialogsitem}>Roma</div>
      </div>
      <div className={style.messagesChat}>
        <div className={style.chatMessagesBox}>
          <p className="chatMessage toMe">Hi, what's cooking good loking?</p>
          <p className="chatMessage fromMe">I'm fine. What's up?</p>
        </div>
        <div className="chat__inputBox inputBox">
          <textarea name="" id="" cols="30" rows="10" placeholder="Enter message text"></textarea>
        </div>
      </div>
    </div>
  )
}

export default Messages;