import React from 'react';

import { Input } from './styles';

interface IMessageInputProps {
  onChange: (value: string) => void;
  onEnter: VoidFunction;
  value: string;
}

const MessageInput = ({ onChange, onEnter, value }: IMessageInputProps) => {
  const handleContentChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  };

  const handleKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter' && value.length > 0) {
      onEnter();
    }
  };

  return (
    <Input
      placeholder='Type a message'
      value={value}
      onChange={handleContentChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default MessageInput;
