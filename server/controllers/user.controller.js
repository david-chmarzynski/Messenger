// IMPORT QUERIES
const { findOnlineUsers } = require('../queries/user.queries');


exports.getUsers = async (messenger) => {
  const users = await findOnlineUsers();
  messenger.to('messenger').emit('getUsers', users);
};