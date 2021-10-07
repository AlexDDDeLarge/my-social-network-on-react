import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import {MessagesConstructor, DialogConstructor, PostsConstructor} from "./functionsConstructor"

let store = {
  _callSubscriber() {
    console.log("State changed");
  },
  _state: {
    profilePage: {
      posts: [
        new PostsConstructor("p1", 12, "Медитация - круто."),
        new PostsConstructor("p2", 500, "Наруто - это круто."),
      ],
      newPostCurrentText: ""
    },
    messagesPage: {
      dialogs: [
        new DialogConstructor("u1", "Emil", "E", [
          new MessagesConstructor(
            "m1",
            "u1",
            "toMe",
            "Hi, Dima. what's cooking good loking?"
          ),
        ]),
        new DialogConstructor("u2", "Leyla", "L", [
          new MessagesConstructor(
            "m1",
            "u2",
            "toMe",
            "Hi, Dima. what's cooking good loking?"
          ),
          new MessagesConstructor(
            "m2",
            "u2",
            "fromMe",
            "Hi, Leyla. I'm fine. What's up?"
          ),
          new MessagesConstructor("m3", "u2", "forwardedToMe", "A. Forwared to me"),
          new MessagesConstructor("m3", "u2", "forwardedFromMe", "A. Forwared from me"),
          new MessagesConstructor("m4", "u2", "replyToMe", "B. Reply to me"),
          new MessagesConstructor("m5", "u2", "replyFromMe", "C. Reply from me"),
        ]),
        new DialogConstructor("u3", "Roma", "P", [
          new MessagesConstructor("m3", "u3", "forwardedToMe", "A. Forwared"),
        ]),
        new DialogConstructor("u4", "Sasha", "E", [
          new MessagesConstructor("m4", "u4", "replyToMe", "B. Reply to me"),
        ]),
        new DialogConstructor("u5", "Vlad", "B", [
          new MessagesConstructor("m5", "u5", "replyFromMe", "C. Reply from me"),
        ]),
        new DialogConstructor("u6", "Valentyna", "P", [
          new MessagesConstructor("m6", "u6", "toMe", "Hi, Dima!"),
        ]),
      ],
      newMessageCurrentText: ""
    }
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);

    this._callSubscriber(this.getState());
  }
};

window.store = store;

export default store;