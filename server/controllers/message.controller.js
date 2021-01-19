// IMPORT QUERIES
const { getMessagesByRoomId, createMessage } = require("../queries/message.queries");
const { findUserById } = require("../queries/user.queries");
const { findRoomById } = require('../queries/room.queries');


exports.sendMessage = (socket, messenger) => {
  socket.on('sendMessage', async ({message, userId, roomId}, callback) => {
    try {
      const user = await findUserById(userId);
      if(user) {
        let authorName = user.username;
        let res = await createMessage(message, userId, authorName, roomId);
        let messages = await getMessagesByRoomId(roomId);
        let room = await findRoomById(roomId);
        messenger.to(`${room.title}`).emit('getMessages', messages);
        callback(res);
      } else {
        let res = {
          status: 403,
          message: "Vous n'êtes pas autorisé à envoyer de message"
        };
        callback(res);
      }
    } catch (error) {
      let res = {
        status: 500,
        message: "Une erreur s'est produite. Veuillez réessayer plus tard"
      };
      callback(res);
      throw error;
    }
  });
};