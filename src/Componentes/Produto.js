import React from 'react'

const Produto = ({ nome, propriedades }) => {
  return (
    <div>
      <p>{nome}</p>
      <ul>
        {propriedades.map(propriedade => <li>{propriedade}</li>)}
      </ul>
    </div>
  )
}

export default Produto