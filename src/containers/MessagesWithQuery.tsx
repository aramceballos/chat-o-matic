import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Message from '../components/Message';

interface IMessagesWithQueryProps {
  user: string;
}

const GET_MESSAGES = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`;

const MessagesWithQuery = ({ user }: IMessagesWithQueryProps) => {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { messages }: { messages: IMessage[] } = data;

  return (
    <>
      {messages.map((message) => (
        <Message key={message.id} userMessage={user} message={message} />
      ))}
    </>
  );
};

export default MessagesWithQuery;
