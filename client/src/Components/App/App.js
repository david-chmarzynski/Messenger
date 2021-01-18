import React, { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Contact from '../Contact/Contact';
import Message from '../Message/Message';
import Sign from '../Sign/Sign';

// SOCKETS
let ios;

const App = () => {
  // STATES
  const [username, setUsername] = useState('');
  const [isOnline, setIsOnline] = useState(false);

  // INIT SOCKET.IO
  useEffect(() => {
    ios = io();
  });
  return (
    <Router>
    <div id="App">
      {!isOnline && (
        <Sign />
      )}
      {isOnline && (
        <>
        <Contact />
        <Message />
        </>
      )}

    </div>
    </Router>
  );
}

export default App;
