import { MessagesConstructor } from "./functionsConstructor"

const UPDATE_NEW_MESSAGE_CURRENT_TEXT = "UPDATE-NEW-MESSAGE-CURRENT-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const messagesPageReducer = (state, action) => {
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

export const UpdateNewMessageCurrentTextCreator = function (text) {
  this.type = UPDATE_NEW_MESSAGE_CURRENT_TEXT;
  this.text = text;
}
export const SendMessageCreator = function (messageId, dialogWithUser) {
  this.type = SEND_MESSAGE;
  this.typeOfMessage = "fromMe";
  this.messageId = messageId;
  this.dialogWithUser = dialogWithUser;
}

export default messagesPageReducer;