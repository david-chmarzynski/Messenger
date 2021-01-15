const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 4000;

// CONFIG DATABASE
require('./database');

// CONFIG SERVER
const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(express.static(path.join(__dirname, "./build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});
const server = app.listen(PORT);

// EXPORT SERVER
module.exports = { server };

// CONFIG SOCKET.IO
require('./socket.io');
