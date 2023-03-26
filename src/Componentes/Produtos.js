import React from 'react'
import Header from './Header'
import Titulo from './Titulo'
import Produto from './Produto'

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Header />
      <Titulo texto="Compre seu produto" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>)
}

export default Produtos;