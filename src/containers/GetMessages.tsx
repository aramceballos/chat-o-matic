import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

import Message from '../components/Message';

const GET_MESSAGES = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: scroll;
  max-height: 500px;
`;

const GetMessages = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { messages }: { messages: TMessage[] } = data;

  return (
    <MessagesContainer>
      {messages.map((message) => (
        <Message key={message.id} userMessage='Aram' message={message} />
      ))}
    </MessagesContainer>
  );
};

export default GetMessages;
