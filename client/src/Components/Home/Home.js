import React from 'react';

// IMPORT STYLED COMPONENTS (MESSAGE)
import { 
  StyledMessage,
  StyledMessageHeader,
  StyledMessageSection,
  StyledContactMessage,
  StyledMessageHeaderLeft,
  StyledMessageInformation,
  StyledMessageHeaderRight,
  StyledMessengerMessage
} from '../Message/Message.Styled';

// IMPORT MUI COMPONENTS
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';

const Home = () => {
  return (
    <StyledMessage>
        <StyledMessageHeader>
        <StyledMessageHeaderLeft>
          <IconButton>
            <Avatar />
          </IconButton>
          <StyledMessageInformation>
          </StyledMessageInformation>
        </StyledMessageHeaderLeft>
        <StyledMessageHeaderRight>
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <IconButton>
            <VideocamIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </StyledMessageHeaderRight>
        </StyledMessageHeader>
        <StyledMessageSection>
          <StyledMessengerMessage><p>Commencez une discussion avec un contact connecté</p></StyledMessengerMessage>
        </StyledMessageSection>
      </StyledMessage>
  );
};

export default Home;