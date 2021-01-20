import React, { useRef, useEffect } from 'react';

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

const Message = ({ roomId, messages, userId, sendMessage, message, setMessage, contact, isContactOnline }) => {
  const ref = useRef(null);
  const scrollToBottom = () => {
    ref.current.scrollTo({ 
      behavior: "smooth",
      top: document.getElementById('scroller').scrollHeight
    });
  };

  useEffect(scrollToBottom, [messages]);
  return (
      <StyledMessage>
        <StyledMessageHeader>
        <StyledMessageHeaderLeft>
          <IconButton>
            <Avatar />
          </IconButton>
          <StyledMessageInformation>
            <h2>{contact}</h2>
            <p>{isContactOnline ? "Actuellement en ligne" : "Actuellement hors ligne"}</p>
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
        <StyledMessageSection ref={ref} id="scroller">
          {messages.map(message => {
            return message.room === roomId && message.author === userId ? <StyledPersonalMessage><p>{message.data}</p></StyledPersonalMessage> :
            message.room === roomId && message.author !== userId ? <StyledContactMessage><p>{message.data}</p></StyledContactMessage> : null
          })}
        </StyledMessageSection>
        <StyledMessageFooter>
          <IconButton>
            <AddIcon />
          </IconButton>
          <StyledMessageFooterInput>
            <textarea
            name=""
            id=""
            cols="20"
            rows="1"
            wrap="hard"
            placeholder="Ecrivez un message..."
            value={message}
            onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null}
            onChange={e => setMessage(e.target.value)}
            >
            </textarea>
            <IconButton>
              <EmojiEmotionsIcon />
            </IconButton>
          </StyledMessageFooterInput>
          <IconButton onClick={e => sendMessage(e)}>
            <SendIcon />
          </IconButton>
        </StyledMessageFooter>
      </StyledMessage>
  );
};

export default Message;