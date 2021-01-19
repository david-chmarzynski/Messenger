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
let messenger;

const App = () => {
  // STATES
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [userId, setUserId] = useState('');
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Erreur');
  const [alertMessage, setAlertMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState();
  const [roomId, setRoomId] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // INIT SOCKET.IO
  useEffect(() => {
    ios = io();
  }, []);

  // CONNECT CHATROOM NAMESPACE
  useEffect(() => {
    if(isOnline) {
      messenger = io('/messenger');

      messenger.on('connect', () => {

        messenger.on('getUsers', (res) => {
          setOnlineUsers(res);
        });

        messenger.on('getMessages', (res) => {
          setMessages(res);
        });
      });
    }
  }, [isOnline]);

  const signin = (e) => {
    e.preventDefault();
    const ids = {username, password};
    ios.emit('signin', ids, (res) => {
      if(res.status === 200) {
        setIsOnline(true);
        setUserId(res.user_id);
        setAlert(true);
        setAlertMessage(res.message);
      } else {
        setError(true);
        setErrorMessage(res.message);
      }
    });
  };

  const signup = (e) => {
    e.preventDefault();
    if(password === repeatPassword) {
      const ids = {username, password};
      ios.emit('signup', ids, (res) => {
        if(res.status === 200) {
          setAlert(true);
          setAlertMessage(res.message);
        } else {
          setError(true);
          setErrorMessage(res.message);
        }
      });
    } else {
      setError(true);
      setErrorMessage('Les mots de passe ne correspondent pas');
    }
  };

  const joinRoom = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const ids = {userId, id};
    messenger.emit('joinRoom', ids, (res) => {
      setRoomId(res.roomId);
      setMessages(res.messages);
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const datas = {message, userId, roomId};
    messenger.emit('sendMessage', datas, (res) => {
      setMessage('');
    });
  };
  return (
    <Router>
    <div id="App">
      {!isOnline && (
        <Sign
          signin={signin}
          signup={signup}
          setUsername={setUsername}
          username={username}
          setPassword={setPassword}
          password={password}
          setRepeatPassword={setRepeatPassword}
          repeatPassword={repeatPassword}
          error={error}
          setError={setError}
          errorMessage={errorMessage}
          alert={alert}
          setAlert={setAlert}
          alertMessage={alertMessage}
        />
      )}
      {isOnline && (
        <>
        <Contact onlineUsers={onlineUsers} joinRoom={joinRoom} />
        <Message
          roomId={roomId}
          messages={messages}
          userId={userId}
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
        </>
      )}

    </div>
    </Router>
  );
}

export default App;
