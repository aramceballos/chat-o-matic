import React, { useState } from 'react';

import { Input } from './styles';

type TSendMessage = (content: string) => void;

interface IMessageInputProps {
  user: string;
  sendMessage: TSendMessage;
}

const MessageInput = ({ user, sendMessage }: IMessageInputProps) => {
  const [content, setContent] = useState('');

  const handleContentChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setContent(ev.target.value);
  };

  const handleKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      sendMessage(content);
      setContent('');
    }
  };

  return (
    <Input
      placeholder='Type a message'
      value={content}
      onChange={handleContentChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default MessageInput;
