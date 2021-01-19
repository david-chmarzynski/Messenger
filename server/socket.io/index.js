const socketio = require('socket.io');
const { server } = require('../index');

// IMPORT CONTROLLERS
const { signin, signup, disconnect } = require('../controllers/auth.controller');
const { getUsers } = require('../controllers/user.controller');

// ENTRY POINT
const ios = socketio(server);

// OTHERS
const messenger = ios.of('/messenger');

// CONFIG IOS
ios.on('connect', (socket) => {
  signin(socket);
  signup(socket);
});

// CONFIG MESSENGER
messenger.on('connect', (socket) => {
  socket.join('messenger');
  getUsers(messenger);

  socket.on('disconnect', () => {
    disconnect(socket, messenger);
  });
});