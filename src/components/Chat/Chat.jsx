import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import React from 'react';
import firebase, { auth, firestore } from '../../utils/firebase';
import ChatRoom from './ChatRoom/ChatRoom';

// const SignIn = () => {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };
//   return <button onClick={signInWithGoogle}>Signin with Google</button>;
// };

const Chat = () => {
  const [user] = useAuthState(auth);

  console.log('user: ', user);
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {!user ? <ChatRoom /> : 'Signin'}
    </div>
  );
};

export default Chat;
