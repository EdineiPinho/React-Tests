import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  console.log(dados);
  if (dados === null) return null;
  return (
    <div>
      <ul style={{
        list:
          'none'
      }}><h2>Produtos{' '}</h2>
        {dados.map((produto) => (
          <li key={produto.id}>
            <ul style={{ listStyle: 'none' }}>{produto.nome}
              <li>R$: {produto.preco}</li>
              <li>{produto.descricao}</li>
              <li><img width={'300px'} src={produto.fotos[0].src} alt={produto.fotos[0].titulo} /></li>
            </ul>
          </li>
        ))}</ul>
    </div>
  )
}

export default Produto