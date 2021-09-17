import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* //Dialogs
let DialogConstructor = function (id, firstName, lastName) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
};

let dialogsData = [
  new DialogConstructor("a1", "Emil", "E"),
  new DialogConstructor("a2", "Leyla", "L"),
  new DialogConstructor("a3", "Roma", "R"),
  new DialogConstructor("a4", "Sasha", "E"),
  new DialogConstructor("a5", "Vlad", "B"),
];

let dialogsElements = dialogsData.map(function (elem, index) {
  return (
    <Dialog
      userId={elem.id}
      firstName={elem.firstName}
      lastName={elem.lastName}
    />
  );
});

//Chat
let MessagesConstructor = function (id, type, text) {
  this.id = id;
  this.type = type;
  this.text = text;
};

let messagesData = [
  new MessagesConstructor(
    "m1",
    "toMe",
    "Hi, Dima. what's cooking good loking?"
  ),
  new MessagesConstructor("m2", "fromMe", "Hi, Leyla. I'm fine. What's up?"),
  new MessagesConstructor("m3", "forwarded", "A. Forwared"),
  new MessagesConstructor("m4", "replyToMe", "B. Reply to me"),
  new MessagesConstructor("m5", "replyFromMe", "C. Reply from me"),
];

//////POSTS//////

let PostsConstructor = function (id, likeCount, text) {
  this.id = id;
  this.likeCount = likeCount;
  this.text = text;
};

let postsData = [
  new PostsConstructor("p1", 12, "Медитация - круто."),
  new PostsConstructor("p2", 500, "Наруто - это круто."),
];

let postsElements = postsData.map((elem) => (
  <Post postId={elem.id} text={elem.text} likesCount={elem.likeCount} />
)); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
