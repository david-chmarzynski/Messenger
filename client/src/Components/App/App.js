import React, { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client';

// IMPORT COMPONENTS
import Contact from '../Contact/Contact';
import Message from '../Message/Message';
import Sign from '../Sign/Sign';

// SOCKETS
let ios;

const App = () => {
  // STATES
  const [username, setUsername] = useState('');

  // INIT SOCKET.IO
  useEffect(() => {
    ios = io();
  });
  return (
    <div id="App">
      {/* <Contact />
      <Message /> */}
      <Sign />
    </div>
  );
}

export default App;
