const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    {userId: "u2", firstName: "Leyla", lastName: "A", messages: [
      {dialogWithUser: "u2", type: "toMe", text: "Hi, Dima. what's cooking good loking?"},
      {dialogWithUser: "u2", type: "fromMe", text: "Hi, Leyla. I'm fine. What's up?"},
      {dialogWithUser: "u2", type: "forwardedToMe", text: "A. Forwared to me"},
      {dialogWithUser: "u2", type: "forwardedFromMe", text: "A. Forwared from me"},
      {dialogWithUser: "u2", type: "replyToMe", text: "B. Reply to me"},
      {dialogWithUser: "u2", type: "replyFromMe", text: "C. Reply from me"}
    ]},
    {userId: "u3", firstName: "Polina", lastName: "S", messages: [
      {dialogWithUser: "u2", type: "toMe", text: "Hi, Dima. what's cooking good loking?"},
      {dialogWithUser: "u2", type: "fromMe", text: "Hi, Polina. I'm fine. What's up?"},
      {dialogWithUser: "u2", type: "forwardedToMe", text: "A. Forwared to me"},
      {dialogWithUser: "u2", type: "forwardedFromMe", text: "A. Forwared from me"},
      {dialogWithUser: "u2", type: "replyToMe", text: "B. Reply to me"},
      {dialogWithUser: "u2", type: "replyFromMe", text: "C. Reply from me"}
    ]}
  ]
}

const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.map(user => {
          if (action.dialogWithUser === user.userId) {
            user.messages = user.messages.map(message => message);
            let newMessageItem = {dialogWithUser: action.dialogWithUser, type: action.typeOfMessage, text: action.newMessageBody};
            user.messages.push(newMessageItem);
            console.log(user)
            return user
          }
          return user
        })
      }
    default: 
      return state;
  }
}

export const sendMessage = function (newMessageBody, dialogWithUser) {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
    typeOfMessage: "fromMe",
    dialogWithUser: dialogWithUser
  }
}

export default messagesPageReducer;