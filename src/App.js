import React from 'react';
import Produto from './Hooks/HookUseContext/Produto'
import { GlobalStorage } from './Hooks/HookUseContext/GlobalContext';

const App = () => {

  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
