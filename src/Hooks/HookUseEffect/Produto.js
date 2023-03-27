import React from 'react'

const estilo = {
  width: '300px',
  height: '450px',
  marginRight: '12px',
  borderRadius: '4px'
}

const Produto = ({ dados }) => {
  return (
    <div>
      <h1 style={{ fontFamily: 'sans-serif' }}>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <p>{dados.descricao}</p>
      <div style={{ display: 'flex' }}>
        <img style={estilo} src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        <img style={estilo} src={dados.fotos[1].src} alt={dados.fotos[1].titulo} />
      </div>
    </div>
  )
}

export default Produto