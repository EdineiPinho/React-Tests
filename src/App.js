import React from 'react';
import Produto from './Hooks/HookUseContext/Produto'
import { GlobalStorage } from './Hooks/HookUseContext/GlobalContext';
import Limpar from './Hooks/HookUseContext/Limpar';

const App = () => {

  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
