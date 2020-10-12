import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import MessagesWithQuery from '../containers/MessagesWithQuery';
import MessageMutation from '../containers/MessageMutation';

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto 65px;
  overflow: scroll;
  height: 92vh;
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: space-around;
  padding: 15px 0;
  background-color: #ececec;
  position: fixed;
  bottom: 0;
`;

const UserInput = styled.input`
  border-radius: 20px;
  width: 20%;
  padding-left: 10px;
  border: none;
`;

const Chat = () => {
  const [user, setUser] = useState('Aram');

  const handleUserChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUser(ev.target.value);
  };

  return (
    <>
      <MessagesContainer>
        <MessagesWithQuery user={user} />
      </MessagesContainer>
      <Form>
        <UserInput value={user} onChange={handleUserChange} />
        <MessageMutation user={user} />
      </Form>
    </>
  );
};

export default Chat;
