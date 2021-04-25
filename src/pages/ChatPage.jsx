import React from 'react';
import MetaDecorator from '../components/shared/MetaDecorator/MetaDecorator';
import Chat from '../components/Chat/Chat';

const ChatPage = () => {
  return (
    <div>
      <MetaDecorator
        title='Chat | Healovo'
        description='Chat App for a medical website'
      />
      <Chat />
    </div>
  );
};

export default ChatPage;
