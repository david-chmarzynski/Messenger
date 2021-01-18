import React, { useState } from 'react';

// IMPORT STYLED COMPONENTS
import { StyledSign, StyledSignin, StyledSigninForm, StyledSignup, StyledCheckBox, StyledFooter, StyledSignupForm } from './Sign.Styled';

// IMPORT MUI COMPONENTS
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const Sign = () => {
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(!signup);
  };
  
  return (
    <StyledSign>
      {!signup && (
      <StyledSignin>
        <StyledSigninForm>
        <h1>Connectez vous à Messenger</h1>
        <TextField
          id="outlined-password-input"
          label="Nom d'utilisateur"
          type="text"
          autoComplete="username"
          variant="outlined"
        />
          <TextField
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
          <Button variant="contained" color="primary">Continuer</Button>
          <StyledCheckBox>
          <Checkbox
            defaultChecked
            color="primary"
            label="Rester connecté(e)"
          />
          <p>Rester connecté(e)</p>
          </StyledCheckBox>
        </StyledSigninForm>
        <StyledFooter>
          <p onClick={handleSignup}>Pas encore inscrit ?</p>
          <p>Mot de passe oublié ?</p>
          <p>Politique d'utilisation des données</p>
          <p>Conditions</p>
          <p>Politique d'utilisation des cookies</p>
          <p>© Messenger - 2021</p>
        </StyledFooter>
      </StyledSignin>
      )}
      {signup && (
        <StyledSignup>
        <StyledSignupForm>
          <h1>Inscrivez vous à Messenger</h1>
            <TextField
              id="outlined-password-input"
              label="Nom d'utilisateur"
              type="text"
              autoComplete="username"
              variant="outlined"
            />
            <TextField
            id="outlined-password-input"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Confirmez le mot de passe"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button variant="contained" color="primary">S'inscrire</Button>
        </StyledSignupForm>
        <StyledFooter>
          <p onClick={handleSignup}>Se connecter</p>
          <p>Politique d'utilisation des données</p>
          <p>Conditions</p>
          <p>Politique d'utilisation des cookies</p>
          <p>© Messenger - 2021</p>
        </StyledFooter>
        </StyledSignup>
        
      )}
    </StyledSign>
  );
};

export default Sign;