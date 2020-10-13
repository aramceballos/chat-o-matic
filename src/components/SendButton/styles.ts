import styled from 'styled-components';

interface IButtonProps {
  show: boolean;
}

export const Button = styled.button<IButtonProps>`
  width: ${({ show }) => (show ? '15%' : '0')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  border: none;
  border-radius: 20px;
  background-color: #7b7bff;
  color: white;
  transition: 0.3s ease all;
  padding: 0;
  max-width: 130px;
  cursor: pointer;
`;
