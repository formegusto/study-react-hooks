import React, { useCallback, useState } from 'react';
import InfoComponent from './InfoComponent';

function App() {
  const [visible, setVisible] = useState(true);

  const changeVisible = useCallback(() => {
    setVisible(!visible);
  }, [setVisible, visible]);

  return (
    <>
      <button type="button" onClick={changeVisible}>toggle</button>
      {visible && <InfoComponent />}
    </>
  );
}

export default App;
