import React from 'react';
import useLocalStorage from './Hooks/customHooks/useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <>
      <p>Produto preferido = {produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </>
  );
};

export default App;
