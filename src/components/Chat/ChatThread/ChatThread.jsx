import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase, { auth, firestore } from '../../../utils/firebase';
import ChatMessage from '../ChatMessage/ChatMessage';

import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  position: relative;

  .container {
    text-align: center;
    margin: 0 auto;
    width: 100%;
    height: 90%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: #1e1e24;
    }

    &::-webkit-scrollbar-thumb {
      background: hsl(229, 86%, 56%);
    }
  }

  form {
    height: 10%;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    font-size: 1.5rem;
  }

  form button {
    width: 20%;
    background-color: hsl(229, 86%, 56%);
  }

  input {
    line-height: 1.5;
    width: 100%;
    font-size: 1.5rem;
    background: #343949;
    color: white;
    outline: none;
    border: none;
    padding: 0 1em;
    /* border-radius: 25px 0 0 0; */
  }

  button {
    background-color: #282c34; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
    /* border-radius: 0 25px 0 0; */
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// const createNewMessage = async (chatRef, doctorID, patientID) => {
//   try {
//     await messageRef.add({
//       text: messageText,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });
//   } catch (error) {
//     console.log('Error adding message: ', error);
//   }
// };

const ChatThread = ({ messageRef }) => {
  const [messageText, setMessageText] = useState('');
  const query = messageRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    await messageRef.add({
      text: messageText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setMessageText('');
  };

  return (
    <Wrapper className=''>
      <div className='container'>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type='text'
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button type='submut'>Send</button>
      </form>
    </Wrapper>
  );
};

export default ChatThread;
