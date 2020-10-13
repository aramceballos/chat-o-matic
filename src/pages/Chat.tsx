import React, { useState } from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';

import MessagesWithQuery from '../containers/MessagesWithQuery';
import MessageInput from '../components/MessageInput';
import SendButton from '../components/SendButton';

const SEND_MESSAGE = gql`
  mutation SendMessage($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  overflow: scroll;
  height: 92vh;
  padding-bottom: 65px;
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: space-around;
  padding: 15px 0;
  background-color: #ecececaa;
  position: fixed;
  bottom: 0;
  backdrop-filter: blur(5px) saturate(180%);
`;

const UserInput = styled.input`
  border-radius: 20px;
  width: 20%;
  padding-left: 10px;
  border: none;
  background-color: #ffffffa8;
`;

const Chat = () => {
  const [user, setUser] = useState('Aram');
  const [content, setContent] = useState('');
  const [show, setShow] = useState(false);

  const [postMessage] = useMutation(SEND_MESSAGE);

  const sendMessage = () => {
    if (content.length > 0 && user.length > 0) {
      postMessage({ variables: { user, content } });
      setContent('');
      setShow(false);
    }
  };

  const handleUserChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUser(ev.target.value);
  };

  const handleMessageChange = (value: string) => {
    setContent(value);

    if (value.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <MessagesContainer>
        <MessagesWithQuery user={user} />
      </MessagesContainer>
      <Form>
        <UserInput value={user} onChange={handleUserChange} />
        <MessageInput
          value={content}
          onChange={handleMessageChange}
          onEnter={sendMessage}
        />
        <SendButton show={show} onClick={sendMessage} />
      </Form>
    </>
  );
};

export default Chat;
