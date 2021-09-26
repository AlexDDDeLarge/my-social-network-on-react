let MessagesConstructor = function (messageId, dialogWithUser, type, text) {
  this.messageId = messageId;
  this.dialogWithUser = dialogWithUser;
  this.type = type;
  this.text = text;
};

let DialogConstructor = function (userId, firstName, lastName, messages) {
  this.userId = userId;
  this.firstName = firstName;
  this.lastName = lastName;
  this.messages = messages;
};

let PostsConstructor = function (id, likeCount, text) {
  this.id = id;
  this.likeCount = likeCount;
  this.text = text;
};

/////
const UPDATE_CURRENT_TEXT_OF_THE_NEW_POST = "UPDATE-CURRENT-TEXT-OF-THE-NEW-POST";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_CURRENT_TEXT = "UPDATE-NEW-MESSAGE-CURRENT-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

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
    if (action.type === UPDATE_CURRENT_TEXT_OF_THE_NEW_POST) {
      this._state.profilePage.newPostCurrentText = action.newValue;
      this._callSubscriber(this.getState());
    } else if (action.type === ADD_POST) {
      let newPost = new PostsConstructor("p3", 0, this._state.profilePage.newPostCurrentText);
      this._state.profilePage.posts.push( newPost );
      this._state.profilePage.newPostCurrentText = "";
      this._callSubscriber(this.getState());
    } else if (action.type === UPDATE_NEW_MESSAGE_CURRENT_TEXT) {
      this._state.messagesPage.newMessageCurrentText = action.text;
      this._callSubscriber(this.getState())
    } else if (action.type === SEND_MESSAGE) {
      this._state.messagesPage.dialogs.map(
        (elem) => {
          if (action.dialogWithUser === elem.userId) {
            let newMessages = new MessagesConstructor(action.messageId, action.dialogWithUser, action.typeOfMessage, action.text);
            elem.messages.push(newMessages);
            this._state.messagesPage.newMessageCurrentText = "";
            // this._callSubscriber(this.getState())
          }
        }, store
      );
      this._callSubscriber(this.getState())
    } 
  }
  /* updateCurrentTextOfTheNewPost(newValue) {
    this._state.profilePage.newPostCurrentText = newValue;
    this._callSubscriber(this);
  },
  addPost() {
    let newPost = new PostsConstructor("p3", 0, this._state.profilePage.newPostCurrentText);
    this._state.profilePage.posts.push( newPost );
    this._state.profilePage.newPostCurrentText = "";
    this._callSubscriber(this);
  } */
};

export const UpdateCurrentTextOfTheNewPostActionConstructor = function (text) {
  this.type = UPDATE_CURRENT_TEXT_OF_THE_NEW_POST;
  this.newValue = text;
}
export const AddPostActionCreator = function () {
  this.type = ADD_POST;
}
export const UpdateNewMessageCurrentTextCreator = function (text) {
  this.type = UPDATE_NEW_MESSAGE_CURRENT_TEXT;
  this.text = text;
}
export const SendMessageCreator = function (messageId, dialogWithUser, text) {
  this.type = SEND_MESSAGE;
  this.typeOfMessage = "fromMe";
  this.messageId = messageId;
  this.dialogWithUser = dialogWithUser;
  this.text = text;
}

window.store = store;

export default store;