const Room = require('../models/room.model');

exports.findRoomByUsersId = (userId, id) => {
  return Room.find({$and: [{ "users": userId }, { "users": id }]}).exec();
};

exports.findRoomById = (roomId) => {
  return Room.findById(roomId).exec();
};

exports.createRoom = (title, userId, id) => {
  try {
    let newRoom = new Room({
      title: title,
      users: [
        userId,
        id
      ]
    });
    return newRoom.save();
  } catch (error) {
    throw error;
  }
};

exports.findRoomsByUserId = (userId) => {
  return Room.find({ "users": `${userId}` }).exec();
};
