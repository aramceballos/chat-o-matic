import React from 'react';
import { Button } from './styles';

interface ISendButtonProps {
  show: boolean;
  onClick: VoidFunction;
}

const SendButton = ({ show, onClick }: ISendButtonProps) => {
  return (
    <Button onClick={onClick} show={show}>
      <span>Send</span>
    </Button>
  );
};

export default SendButton;
