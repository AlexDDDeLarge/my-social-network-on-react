let MessagesConstructor = function (messageId, dialogWithUser, type, text) {
  this.MessageId = messageId;
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

let state = {
  profilePage: {
    posts: [
      new PostsConstructor("p1", 12, "Медитация - круто."),
      new PostsConstructor("p2", 500, "Наруто - это круто."),
    ]
  },
  messagesPage: [
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
  ]
}

export default state;