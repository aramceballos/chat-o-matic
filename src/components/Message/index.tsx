import React from 'react';

import { Wrapper, MessageContainer, Content, UserAvatar } from './styles';

interface IMessageProps {
  message: IMessage;
  userMessage: string;
}

const Message = ({ message, userMessage }: IMessageProps) => {
  const { user, content } = message;

  const thisUser = userMessage.toLowerCase() === user.toLowerCase();

  return (
    <Wrapper thisUser={thisUser}>
      {!thisUser ? (
        <UserAvatar>
          <Content>{user.slice(0, 2).toUpperCase()}</Content>
        </UserAvatar>
      ) : null}
      <MessageContainer thisUser={thisUser}>
        <Content>{content}</Content>
      </MessageContainer>
    </Wrapper>
  );
};

export default Message;
