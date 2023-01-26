import ChatThread from '../ChatThread/ChatThread';
import firebase, { auth, firestore } from '../../../utils/firebase';
import { Box, Card } from '@material-ui/core';
import ChatTray from '../ChatTray/ChatTray';

const ChatRoom = () => {
  const messageRef = firestore.collection('messageMe');

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      style={{ width: '100%', height: '100%', backgroundColor: '#F1F2F4' }}
    >
      <Card style={{ width: '80%', height: '90%' }}>
        <Box
          style={{ height: '100%' }}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <ChatTray />
          <ChatThread messageRef={messageRef} />
        </Box>
      </Card>
    </Box>
  );
};

export default ChatRoom;
