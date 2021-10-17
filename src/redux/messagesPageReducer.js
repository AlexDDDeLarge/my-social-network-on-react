import { DialogConstructor, MessagesConstructor } from "./functionsConstructor"

const UPDATE_NEW_MESSAGE_CURRENT_TEXT = "UPDATE-NEW-MESSAGE-CURRENT-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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

const messagesPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_CURRENT_TEXT:
      state.newMessageCurrentText = action.text;
      return state;
    case SEND_MESSAGE:
      state.dialogs.map((elem) => {
        if (action.dialogWithUser === elem.userId) {
          let newMessages = new MessagesConstructor(action.messageId, action.dialogWithUser, action.typeOfMessage, state.newMessageCurrentText);
          elem.messages.push(newMessages);
          state.newMessageCurrentText = "";
        }
      });
      return state;
    default: 
      return state;
  }
}

export const updateNewMessageCurrentTextCreator = function (text) {
  return {
    type: UPDATE_NEW_MESSAGE_CURRENT_TEXT,
    text: text
  }
}
export const sendMessageCreator = function (messageId, dialogWithUser) {
  return {
    type: SEND_MESSAGE,
    typeOfMessage: "fromMe",
    messageId: messageId,
    dialogWithUser: dialogWithUser
  }
}

export default messagesPageReducer;