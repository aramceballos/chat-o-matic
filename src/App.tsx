import React from 'react';
import Chat from './pages/Chat';
import GlobalStyles from './styles/GlobalStyles';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Chat />
    </>
  );
};

export default App;
