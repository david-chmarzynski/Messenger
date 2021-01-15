const socketio = require('socket.io');
const { server } = require('../index');

// IMPORT CONTROLLERS

// ENTRY POINT
const ios = socketio(server);

// OTHERS
const messenger = ios.of('/messenger');

// CONFIG IOS
ios.on('connect', (socket) => {
  console.log("New connection");
});

// CONFIG MESSENGER