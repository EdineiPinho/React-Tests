import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams();
  const nome = params.id.charAt(0).toUpperCase() + params.id.slice(1);
  return (
    <div>
      <h1>Produto: {nome}</h1>
    </div>
  )
}

export default Produto