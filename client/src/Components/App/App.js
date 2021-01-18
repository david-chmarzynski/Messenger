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
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [userId, setUserId] = useState('');
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Erreur');
  const [alertMessage, setAlertMessage] = useState('');

  // INIT SOCKET.IO
  useEffect(() => {
    ios = io();
  });

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
        <Contact />
        <Message />
        </>
      )}

    </div>
    </Router>
  );
}

export default App;
