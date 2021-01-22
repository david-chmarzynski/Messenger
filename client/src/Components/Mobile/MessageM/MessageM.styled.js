import styled from 'styled-components';

export const StyledMessage = styled.div`
  background-color: #1d1e1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export const StyledMessageHeader = styled.div`
  width: 100%;
  height: 6.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  h2 {
    color: white;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  p {
    color: #656667;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: .9rem;
  }

`;

export const StyledMessageHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
  margin-top: 1rem;

  svg {
    font-size: 1.5rem;
  }

  button:nth-child(1) {
    color: #0199ff;
  }

  button {
    padding: 8px;
  }
`;

export const StyledMessageHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;
  width: 20%;
  margin-top: 1rem;

  svg {
    color: #0199ff;
    font-size: 1.5rem;
  }
`;

export const StyledMessageInformation = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`;


export const StyledMessageFooter = styled.div`
  width: 100%;
  height: 6.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .2rem;
  margin-bottom: .5rem;

  svg {
    color: #0199ff;
    font-size: 20px;
  }

  button {
    padding: 6px;
  }

  button:nth-child(1) {
    svg {
      background-color: #0199ff;
      border-radius: 50%;
      color: #1d1e1f;
    }
  }
`;

export const StyledMessageFooterInput = styled.div`
  width: 80%;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  position: relative;
  border-radius: 30px;
  background-color: #2e3031;
  
  textarea {
    width: 70%;
    border: none;
    color: #FFFFFF;
    font-size: 1.2rem;
    overflow: auto;
    background-color: #2e3031;
    padding: .6rem 1rem .8rem 0;
    font-family: "ubuntu";
    resize: none;
    padding-right: 1rem;
    ::-webkit-scrollbar {
      display: none;
    }

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #656667;
      font-size: 1.2rem;
    }
  }

  svg {
    position: absolute;
    background-color: #2e3031;
    color: #0199ff;
  }
`;

export const StyledMessageSection = styled.div`
  height: 87%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  overflow: auto;
  ::-webkit-scrollbar { width: 0 !important }
`;

export const StyledPersonalMessage = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  margin-block-start: 0;

  p {
    max-width: 45%;
    margin: 1rem 3rem 1rem auto;
    background-color: #0199ff;
    padding: .5rem .7rem;
    border-radius: 15px;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: white;
  }

  span {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledContactMessage = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  p {
    max-width: 45%;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: white;
    background-color: #3f4041;
    padding: .5rem .7rem;
    border-radius: 15px;
    margin: 1em auto 1em 3em;
  }

  span {
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
  }
`;

export const StyledMessengerMessage = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  p {
    max-width: 45%;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: white;
    background-color: #3f4041;
    padding: .8rem 1rem;
    border-radius: 15px;
    margin: auto auto auto auto;
  }

  span {
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
  }
`;