import React from 'react';
import { Route } from 'react-router';
import Chat from './Chat/Chat';
import Dialog from './Dialog/Dialog';
import style from './Messages.module.css'

const Messages = (props) => {

  //Dialogs
  let DialogConstructor = function (id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  let dialogsData = [
    new DialogConstructor ("a1", "Emil", "E"),
    new DialogConstructor ("a2", "Leyla", "L"),
    new DialogConstructor ("a3", "Roma", "R"),
    new DialogConstructor ("a4", "Sasha", "E"),
    new DialogConstructor ("a5", "Vlad", "B")
  ]

  let dialogsElements = dialogsData.map(function(elem, index) {
    return (<Dialog userId={elem.id} firstName={elem.firstName} lastName={elem.lastName} />)
  })

  //Chat
  let MessagesConstructor = function (id, type, text) {
    this.id = id;
    this.type = type;
    this.text = text;
  }

  let messagesData = [
    new MessagesConstructor ("m1", "toMe", "Hi, Dima. what's cooking good loking?"),
    new MessagesConstructor ("m2", "fromMe", "Hi, Leyla. I'm fine. What's up?"),
    new MessagesConstructor ("m3", "forwarded", "A. Forwared"),
    new MessagesConstructor ("m4", "replyToMe", "B. Reply to me"),
    new MessagesConstructor ("m5", "replyFromMe", "C. Reply from me")
  ];

  return (
    <div className={style.Messages}>
      <div className={style.dialogs}>
        {dialogsElements}
        {/*<Dialog firstName="Vlad" lastName="B" userId="a5"/> */}
      </div>
      <Route exact path={`/messages/a2`}>
        <Chat data={messagesData} personId="a2"/>
      </Route>
    </div>
  )
}

export default Messages;