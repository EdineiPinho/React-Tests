import React from 'react'

const NoReducer = () => {
  const [contar, setContar] = React.useState(0);

  function aumentar() {
    setContar(contar + 1)
  }

  function diminuir() {
    setContar(contar - 1)
  }

  return (
    <div>
      <h1>React.useState()</h1>
      <p>Contagem: {contar}</p>
      <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>
    </div>
  )
}

export default NoReducer