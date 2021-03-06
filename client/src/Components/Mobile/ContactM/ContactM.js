import React from 'react';

// IMPORT STYLED COMPONENTS
import { 
  StyledContact,
  StyledSearchBar,
  StyledPerson,
  StyledContactHeader,
  StyledContactHeaderLeft,
  StyledContactHeaderRight,
  StyledContactPersonName,
  StyledOnlineBar,
  StyledOnlineContact
} from './ContactM.styled';

// Import == Material UI Icons
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';

const ContactM = ({ onlineUsers, joinRoom, userId, contacts }) => {
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
      <StyledOnlineBar>
        {onlineUsers && onlineUsers.map(user => {
          return user._id !== userId ? 
          <StyledOnlineContact id={user._id} onClick={e => joinRoom(e)}>
          <IconButton>
          <Avatar />
          </IconButton>
          <p>{user.username}</p>
          </StyledOnlineContact>
          : null
        })}
      </StyledOnlineBar>
      <StyledSearchBar>
        <IconButton>
          <SearchIcon />
        </IconButton>
          <input type="search" name="" id="" placeholder="Rechercher" />
      </StyledSearchBar>
      {contacts && contacts.map(contact => {
        return contact &&
        <StyledPerson id={contact._id} onClick={e => joinRoom(e)}>
        <IconButton>
          <Avatar />
        </IconButton>
        <StyledContactPersonName>
          <h2>{contact.username}</h2>
          </StyledContactPersonName>
      </StyledPerson>
      })}
      </StyledContact>
  );
};

export default ContactM;