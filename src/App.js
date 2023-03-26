import React from 'react';
import Home from './Home';
import Produtos from './Produtos';


const App = () => {
  const pagina = document.location.pathname;
  if (pagina === '/produtos') return <Produtos />;
  return (<React.Fragment>
    <Home />
  </React.Fragment>);
};

export default App;
