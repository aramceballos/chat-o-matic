import React from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';

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

const MESSAGES_SUBSCRIPTIONS = gql`
  subscription {
    messages {
      user
      content
    }
  }
`;

const MessagesWithQuery = ({ user }: IMessagesWithQueryProps) => {
  const { data } = useSubscription(MESSAGES_SUBSCRIPTIONS);

  console.log(data);

  if (!data) return null;

  const { messages }: { messages: IMessage[] } = data;

  if (messages.length === 0) return <p>There are not messages to show</p>;

  return (
    <>
      {messages.map((message, i) => (
        <Message key={i} userMessage={user} message={message} />
      ))}
    </>
  );
};

export default MessagesWithQuery;
