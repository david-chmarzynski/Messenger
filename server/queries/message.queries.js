const Message = require('../models/message.model');

exports.getMessagesByRoomId = (id) => {
  return Message.find({ "room": id }).exec();
};

exports.createMessage = async (message, userId, authorName, roomId) => {
  try {
    const newMessage = new Message({
      data: message,
      author: userId,
      authorName: authorName,
      room: roomId
    });
    return newMessage.save();
  } catch (error) {
    throw error;
  }
};