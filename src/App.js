import React from 'react';
import CountComponent from './ContextHook/CountComponent';
import CountContainer from './ContextHook/CountContainer';

function App() {

  return (
    <>
      <CountContainer>
        <CountComponent />
      </CountContainer>
    </>
  );
}

export default App;
