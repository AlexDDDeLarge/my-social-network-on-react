import React from 'react';
import { Route } from 'react-router';
import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import style from './Messages.module.css'

const Messages = (props) => {
  return (
    <div className={style.Messages}>
      <div className={style.dialogs}>
        <Dialog firstName="Emil" lastName="T" userId="a1"/>
        <Dialog firstName="Leyla" lastName="A" userId="a2"/>
        <Dialog firstName="Roma" lastName="P" userId="a3"/>
        <Dialog firstName="Sasha" lastName="E" userId="a4"/> 
        <Dialog firstName="Vlad" lastName="B" userId="a5"/>
       
      </div>
      <Route exact path={`/messages/a2`}>
        <Chat personId="a2"/>
      </Route>
    </div>
  )
}

export default Messages;