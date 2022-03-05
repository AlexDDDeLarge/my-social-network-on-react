export const MessagesConstructor = function (messageId, dialogWithUser, type, text) {
  this.messageId = messageId;
  this.dialogWithUser = dialogWithUser;
  this.type = type;
  this.text = text;
};

export const DialogConstructor = function (userId, firstName, lastName, messages) {
  this.userId = userId;
  this.firstName = firstName;
  this.lastName = lastName;
  this.messages = messages;
};

/* export const PostsConstructor = function (id, likeCount, text) {
  this.id = id;
  this.likeCount = likeCount;
  this.text = text;
}; */