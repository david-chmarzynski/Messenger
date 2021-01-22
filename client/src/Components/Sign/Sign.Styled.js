import styled from 'styled-components';

export const StyledSign = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  display: flex;
  flex-wrap: nowrap;
`;

export const StyledSignin = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  color: black;

  h1 {
    width: 100%;
  }
`;

export const StyledSigninForm = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: .7rem;
  }

  button {
    font-weight: 800;
    margin-top: .5rem;
  }
`;

export const StyledCheckBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledFooter = styled.footer`
  height: 10%;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  
  p {
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const StyledSignup = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  color: black;

  h1 {
    width: 100%;
  }
`;

export const StyledSignupForm = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: .7rem;
  }

  button {
    font-weight: 800;
    margin-top: .5rem;
  }
`;

export const StyledError = styled.div`
  color: red;
`;

export const StyledAlert = styled.div`
  color: green;
`;