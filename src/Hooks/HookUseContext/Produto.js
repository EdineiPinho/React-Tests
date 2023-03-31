import React from 'react'
import HookUseContext from './HookUseContext'

const Produto = () => {
  const dados = React.useContext(HookUseContext);

  console.log(dados);
  return (
    <div>Nome: {dados.nome}</div>
  )
}

export default Produto