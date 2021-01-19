import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #2e3031;
`;

export const StyledContactHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledContactHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  font-size: .8rem;
  color: white;
`;

export const StyledContactHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
    svg {
      color: white;
    }
`;

export const StyledSearchBar = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: #4b4c4d;
  border-radius: 5px;
  border: 1px solid #656667;
  position: relative;
  display: flex;
  flex-wrap: nowrap;

  input {
    background-color: #4b4c4d;
    border: none;
    width: 90%;
    padding: .4rem 0;
    padding-left: 5px;
    font-size: .9rem;

    :focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    left: 2px;
    color: #656667;
  }
`;

export const StyledPerson = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 1rem auto 0 auto;
  width: 100%;

  :hover {
    background-color: #65666777;
    cursor: pointer;
  }

  #contact-person-name {
    
  }
`;

export const StyledContactPersonName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  h2 {
    margin-block-start: 0;
    margin-block-end: 0;
    color: white;
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    color: #656667;
    display: flex;
    flex-wrap: nowrap;
  }

  div {
    width: 18px;
    height: 18px;
    margin-left: .5rem;
  }
`;

export const StyledOnlineBar = styled.div`
  width: 100%;
  height: 7%;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: auto;

`;

export const StyledOnlineContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-block-end: 0;
    margin-block-start: -.5rem;
    color: white;
  }
`;