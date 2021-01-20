// IMPORT QUERIES
const { findRoomByUsersId, createRoom, findRoomsByUserId } = require('../queries/room.queries');
const { getMessagesByRoomId } = require('../queries/message.queries');
const { findUserBySocketId, findUserById } = require('../queries/user.queries');


exports.joinRoom = (socket, messenger) => {
  socket.on('joinRoom', async ({id, userId}, callback) => {
    try {
      let room = await findRoomByUsersId(userId, id);
      if(room.length > 0) {
        socket.join(`${room[0].title}`);
        let messages = await getMessagesByRoomId(room[0]._id);
        let contact = await findUserById(id);
        let res = {
          status: 200,
          roomId: room[0]._id,
          messages: messages,
          contact: contact.username,
          isOnline: contact.isOnline
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

exports.getRooms = async (socket) => {
  let currentUser = await findUserBySocketId(socket.conn.id);
  const rooms = await findRoomsByUserId(currentUser._id);
  let contacts = [];
  let users;
  rooms.map(room => {
    room.users.map(user => {
      if(`${user}` !== `${currentUser._id}`) {
        contacts.push(`${user}`);
      }
    })
  });
  const async = contacts.map(async (contact) => {
    return await findUserById(`${contact}`);
  });

  Promise.all(async).then((completed) => {
    users = completed;
    const res = { rooms, users };
    socket.emit('getRooms', res);
  });

  
};