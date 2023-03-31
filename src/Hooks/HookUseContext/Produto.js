import React from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>Contador: {global.contar} <br /><br />
      <button onClick={global.adicionarUm}>Adicionar 1</button>
      <br />
      <br />
      <button onClick={global.adicionarDois}>Adicionar 2</button>
    </div>
  )
}

export default Produto