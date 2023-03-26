import React from 'react'

const ProdutosFetch = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  return (
    <section>
      {
        produtos.forEach((produto) => <li>(produto.nome)</li>)
      }
    </section>
  )
}

export default ProdutosFetch