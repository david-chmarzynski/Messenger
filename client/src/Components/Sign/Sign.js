import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledSign, StyledSignin, StyledSigninForm, StyledSignup, StyledCheckBox, StyledFooter } from './Sign.Styled';

// IMPORT MUI COMPONENTS
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const Sign = () => {
  return (
    <StyledSign>
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
          <p>Pas encore inscrit ?</p>
          <p>Mot de passe oublié ?</p>
          <p>Politique d'utilisation des données</p>
          <p>Conditions</p>
          <p>Politique d'utilisation des cookies</p>
          <p>© Messenger - 2021</p>
        </StyledFooter>
      </StyledSignin>
    </StyledSign>
  );
};

export default Sign;