// IMPORT QUERIES
const { findRoomByUsersId, createRoom } = require('../queries/room.queries');
const { getMessagesByRoomId } = require('../queries/message.queries');


exports.joinRoom = (socket, messenger) => {
  socket.on('joinRoom', async ({id, userId}, callback) => {
    try {
      let room = await findRoomByUsersId(userId, id);
      if(room.length > 0) {
        socket.join(`${room[0].title}`);
        let messages = await getMessagesByRoomId(room[0]._id);
        let res = {
          status: 200,
          roomId: room[0]._id,
          messages: messages
        };
        callback(res);
      } else {
        let title = socket.conn.id;
        let newRoom = await createRoom(title, userId, id);
        socket.join(`${newRoom.title}`);
        let messages = await getMessagesByRoomId(newRoom._id);
        let res = {
          status: 200,
          roomId: newRoom._id,
          messages: messages
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