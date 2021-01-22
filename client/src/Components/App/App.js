import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Contact from '../Contact/Contact';
import Message from '../Message/Message';
import Sign from '../Sign/Sign';
import Home from '../Home/Home';
import ContactM from '../Mobile/ContactM/ContactM';
import MessageM from '../Mobile/MessageM/MessageM';

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
  const [roomId, setRoomId] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [contacts, setContacts] = useState();
  const [contact, setContact] = useState('');
  const [isContactOnline, setIsContactOnline] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const [width, setWidth] = useState(0);

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

        messenger.on('getRooms', (res) => {
          setRooms(res.rooms);
          setContacts(res.users);
        });
      });
    }
  }, [isOnline]);

  // useEffect((onlineUsers) => {
  //   onlineUsers.map(user => {
  //     if(user._id === contact._id) {
  //       setIsContactOnline(true);
  //     } else {

  //     }
  //   })
  // }, [onlineUsers]);

  // GET WINDOW WIDTH & SET RESPONSIVE
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
      if (window.innerWidth <= 1024) {
        setIsResponsive(true);
      }
      else {
        setIsResponsive(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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
      setRoomId([res.roomId]);
      setMessages(res.messages);
      setContact(res.contact);
      setIsContactOnline(res.isOnline);
      if(isResponsive) {
        setIsDisplayed(true);
      }
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const datas = {message, userId, roomId};
    if(datas.message.length > 0) {
    messenger.emit('sendMessage', datas, (res) => {
      setMessage('');
    });    
  };
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
          isDisplayed={isDisplayed}
          isResponsive={isResponsive}
        />
      )}

      {/* {isOnline && !isResponsive && (
        <>
        <Contact onlineUsers={onlineUsers} joinRoom={joinRoom} userId={userId} contacts={contacts} isDisplayed={isDisplayed} isResponsive={isResponsive} />
        {roomId.length > 0 ? (
          roomId.map(room => (
            <Message
              roomId={room}
              messages={messages}
              userId={userId}
              sendMessage={sendMessage}
              message={message}
              setMessage={setMessage}
              contact={contact}
              isContactOnline={isContactOnline}
              isDisplayed={isDisplayed}
              isResponsive={isResponsive}
            />
          ))
        ) : (
          <Home />
        )}
        </>
      )} */}

      {isOnline && !isResponsive && (
        <Contact onlineUsers={onlineUsers} joinRoom={joinRoom} userId={userId} contacts={contacts} />
      )}
      {isOnline && !isResponsive && roomId.length > 0 && (
        roomId.map(room => (
          <Message
            roomId={room}
            messages={messages}
            userId={userId}
            sendMessage={sendMessage}
            message={message}
            setMessage={setMessage}
            contact={contact}
            isContactOnline={isContactOnline}
          />
      )))}
      {isOnline && !isResponsive && roomId.length === 0 && (
        <Home />
      )}
      
      {/* RESPONSIVE */}
      {isOnline && isResponsive && !isDisplayed && (
        <ContactM onlineUsers={onlineUsers} joinRoom={joinRoom} userId={userId} contacts={contacts}/>
      )}
      {isOnline && isResponsive && isDisplayed && roomId.length > 0 && (
        roomId.map(room => (
          <MessageM
            roomId={room}
            messages={messages}
            userId={userId}
            sendMessage={sendMessage}
            message={message}
            setMessage={setMessage}
            contact={contact}
            isContactOnline={isContactOnline}
            setIsDisplayed={setIsDisplayed}
          />
      )))}

    </div>
    </Router>
  );
}

export default App;
