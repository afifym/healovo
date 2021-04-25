import { Box } from '@material-ui/core';
import React from 'react';
import { auth } from '../../../utils/firebase';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 12px;

  ul,
  li {
    text-align: left;
    list-style: none;
  }

  p {
    max-width: 500px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    text-align: center;
  }

  .message {
    display: flex;
    align-items: center;
  }

  .sent {
    flex-direction: row-reverse;
  }

  .sent p {
    color: white;
    background: #0b93f6;
    align-self: flex-end;
  }
  .received p {
    background-color: #797c88;
    color: white;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  }
`;

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL } = message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <Wrapper>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            'https://www.garvisor.com/frontend/images/empty-user-pic.png'
          }
          alt='photo'
          style={{ backgroundColor: '#E6F0EF' }}
        />
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

export default ChatMessage;
