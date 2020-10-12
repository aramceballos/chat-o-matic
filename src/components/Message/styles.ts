import styled from 'styled-components';

interface WrapperProps {
  thisUser: boolean;
}

interface IMessageContainerProps {
  thisUser: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ thisUser }) => (thisUser ? 'flex-end' : 'flex-start')};
`;

export const MessageContainer = styled.div<IMessageContainerProps>`
  max-width: 40%;
  background-color: ${({ thisUser }) => (thisUser ? '#8ede8e' : '#e8e8e8')};
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.p`
  margin: 0;
`;

export const UserAvatar = styled.div`
  height: 40px;
  width: 40px;
  margin: 10px 5px;
  border-radius: 50%;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
