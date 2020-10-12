import React from 'react';
import { gql, useMutation } from '@apollo/client';

import MessageInput from '../components/MessageInput';

interface IMessageMutationProps {
  user: string;
}

const SEND_MESSAGE = gql`
  mutation SendMessage($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const MessageMutation = ({ user }: IMessageMutationProps) => {
  const [postMessage, { data }] = useMutation(SEND_MESSAGE);

  const sendMessage = (content: string) => {
    postMessage({ variables: { user, content } });
  };

  return <MessageInput user={user} sendMessage={sendMessage} />;
};

export default MessageMutation;
