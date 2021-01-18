const User = require('../models/user.model');

exports.findUserByUsername = (username) => {
  return User.findOne({ "username": username }).exec();
};

exports.setUserOnline = (userId, socketId) => {
  return User.findOneAndUpdate({ "_id": userId }, {$set: { "isOnline": true, "isAuthenticated": true, "socket_id": socketId }}).exec();
};

exports.setUserOffline = (userId) => {
  return User.findOneAndUpdate({ "_id": userId }, {$set: { "isOnline": false, "isAuthenticated": false , "socket_id": "" }}).exec();
};

exports.createUser = async (username, password, socketId) => {
  const hashedPassword = await User.hashPassword(password);
  try {
    const newUser = new User({
      username: username,
      password: hashedPassword,
      isOnline: false,
      isAuthenticated: false,
      socket_id: socketId
    });
    return newUser.save();
  } catch (error) {
    throw error;
  }
};