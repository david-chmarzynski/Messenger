import React from 'react';

// IMPORT STYLED COMPONENTS
import {
  StyledMessage,
  StyledMessageHeader,
  StyledMessageFooter,
  StyledPersonalMessage,
  StyledMessageSection,
  StyledContactMessage,
  StyledMessageHeaderLeft,
  StyledMessageInformation,
  StyledMessageHeaderRight,
  StyledMessageFooterInput
} from './Message.Styled';

// IMPORT MUI COMPONENTS
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, IconButton } from '@material-ui/core';

const Message = () => {
  return (
      <StyledMessage>
        <StyledMessageHeader>
        <StyledMessageHeaderLeft>
          <IconButton>
            <Avatar />
          </IconButton>
          <StyledMessageInformation>
            <h2>David Chmarzynski</h2>
            <p>Actuellement en ligne</p>
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
          <StyledContactMessage>
            <span>15 AOÛT, 13:14</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quasi numquam necessitatibus impedit cum autem rerum soluta ipsam nisi aspernatur.</p>
          </StyledContactMessage>
          <StyledPersonalMessage>
            <span>15 AOÛT, 13:15</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at impedit commodi rem expedita fuga distinctio labore temporibus quam? Quia animi natus quidem labore impedit soluta? Autem optio, dolorem unde, eligendi distinctio modi explicabo voluptas tempora vel magnam, tempore quos ad doloribus facilis suscipit quo. Magnam enim doloremque qui commodi.</p>
          </StyledPersonalMessage>
        </StyledMessageSection>
        <StyledMessageFooter>
          <IconButton>
            <AddIcon />
          </IconButton>
          <StyledMessageFooterInput>
            <textarea name="" id="" cols="20" rows="1" wrap="hard" placeholder="Ecrivez votre message..."></textarea>
            <IconButton>
              <EmojiEmotionsIcon />
            </IconButton>
          </StyledMessageFooterInput>
          <IconButton>
            <SendIcon />
          </IconButton>
        </StyledMessageFooter>
      </StyledMessage>
  );
};

export default Message;