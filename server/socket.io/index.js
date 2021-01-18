const socketio = require('socket.io');
const { server } = require('../index');

// IMPORT CONTROLLERS
const { signin, signup } = require('../controllers/auth.controller');

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