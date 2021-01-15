import React from 'react';

// IMPORT STYLED COMPONENTS
import {
  StyledContact,
  StyledSearchBar,
  StyledPerson,
  StyledContactHeader,
  StyledContactHeaderLeft,
  StyledContactHeaderRight,
  StyledContactPersonName
} from './Contact.Styled';

// Import == Material UI Icons
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';

const Contact = () => {
  return (
    <StyledContact>
      <StyledContactHeader>
        <StyledContactHeaderLeft>
        <IconButton>
          <Avatar />
        </IconButton>
        <h1>Messenger</h1>
        </StyledContactHeaderLeft>
        <StyledContactHeaderRight>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </StyledContactHeaderRight>
      </StyledContactHeader>
      <StyledSearchBar>
        <IconButton>
          <SearchIcon />
        </IconButton>
          <input type="search" name="" id="" placeholder="Rechercher" />
      </StyledSearchBar>
      <StyledPerson>
          <IconButton>
            <Avatar />
          </IconButton>
          <StyledContactPersonName>
            <h2>David Chmarzynski</h2>
            <p>Je suis le dernier message... ⸱ mar. <Avatar /></p>
          </StyledContactPersonName>
      </StyledPerson>
    </StyledContact>
  );
};

export default Contact;