import React, { useState } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledSign, StyledSignin, StyledSigninForm, StyledSignup, StyledCheckBox, StyledFooter, StyledSignupForm, StyledError, StyledAlert } from './Sign.Styled';

// IMPORT MUI COMPONENTS
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const Sign = ({
  error,
  alert,
  errorMessage,
  alertMessage,
  signin,
  signup,
  setUsername,
  setPassword,
  username,
  password,
  repeatPassword,
  setRepeatPassword,
  setError,
  setAlert,
  isResponsive
}) => {
  const [signupLayer, setSignupLayer] = useState(false);

  const handleSignup = () => {
    setSignupLayer(!signupLayer);
    setError(false);
    setAlert(false);
  };
  
  return (
    <StyledSign>
      {!signupLayer && (
      <StyledSignin>
        <StyledSigninForm onSubmit={e => signin(e)}>
        <h1>Connectez vous à Messenger</h1>
        <TextField
          id="outlined-password-input"
          label="Nom d'utilisateur"
          type="text"
          autoComplete="username"
          value={username}
          variant="outlined"
          onChange={e => setUsername(e.target.value)}
        />
          <TextField
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
          <Button variant="contained" color="primary" type="submit">Continuer</Button>
          <StyledCheckBox>
          <Checkbox
            defaultChecked
            color="primary"
            label="Rester connecté(e)"
          />
          <p>Rester connecté(e)</p>
          </StyledCheckBox>
          {error && (
            <StyledError>
              <p>{errorMessage}</p>
            </StyledError>
          )}
          {alert && (
            <StyledAlert>
              <p>{alertMessage}</p>
            </StyledAlert>
          )}
        </StyledSigninForm>
        <StyledFooter>
          <p onClick={handleSignup}>Pas encore inscrit ?</p>
          <p>Mot de passe oublié ?</p>
          {!isResponsive && (
            <>
              <p>Politique d'utilisation des données</p>
              <p>Conditions</p>
              <p>Politique d'utilisation des cookies</p>
              <p>© Messenger - 2021</p>
            </>
          )}
        </StyledFooter>
      </StyledSignin>
      )}
      {signupLayer && (
        <StyledSignup>
        <StyledSignupForm onSubmit={e => signup(e)}>
          <h1>Inscrivez vous à Messenger</h1>
            <TextField
              id="outlined-password-input"
              label="Nom d'utilisateur"
              type="text"
              autoComplete="username"
              variant="outlined"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
            id="outlined-password-input"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Confirmez le mot de passe"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">S'inscrire</Button>
          {error && (
            <StyledError>
              <p>{errorMessage}</p>
            </StyledError>
          )}
          {alert && (
            <StyledAlert>
              <p>{alertMessage}</p>
            </StyledAlert>
          )}
        </StyledSignupForm>
        <StyledFooter>
          <p onClick={handleSignup}>Se connecter</p>
          {!isResponsive && (
              <>
                <p>Politique d'utilisation des données</p>
                <p>Conditions</p>
                <p>Politique d'utilisation des cookies</p>
              </>
          )}
          <p>© Messenger - 2021</p>
        </StyledFooter>
        </StyledSignup>
        
      )}
    </StyledSign>
  );
};

export default Sign;