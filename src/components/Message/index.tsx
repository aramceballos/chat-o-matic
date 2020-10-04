import React from 'react';
import styled from 'styled-components';

interface MessageProps {
  message: TMessage;
  userMessage: string;
}

interface MessageContainerProps {
  thisUser: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const MessageContainer = styled.div<MessageContainerProps>`
  width: 40%;
  justify-content: ${({ thisUser }) => (thisUser ? 'flex-end' : 'flex-start')};
  background-color: ${({ thisUser }) => (thisUser ? '#71ce71' : '#b9b9ff')};
  margin: 10px;
  border-radius: 10px;
  padding: 5px;
`;

const Message = ({ message, userMessage }: MessageProps) => {
  const { user, content } = message;

  console.log(userMessage === user);

  return (
    <Wrapper>
      <MessageContainer thisUser={userMessage === user}>
        <p>{user}</p>
        <p>{content}</p>
      </MessageContainer>
    </Wrapper>
  );
};

export default Message;
