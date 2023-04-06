import React from 'react'

function reducer(state, action) {
  if (action === 'aumentar') {
    return state + 1;
  }
  if (action === 'diminuir') {
    return state - 1;
  }
  return new Error('Error action não existe');
}

function redutor(estado, acao) {
  switch (acao) {
    case 'aumentar':
      return estado + 1;
    case 'diminuir':
      return estado - 1;
    default:
      throw new Error();
  }
}

const WReducer = () => {
  const [state, dispatch] = React.useReducer(redutor, 0)
  return (
    <div>
      <h1>React.useReducer()</h1>
      <p>Contagem: {state}</p>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <button onClick={() => dispatch('aumentar')}>+</button>
    </div>
  )
}

export default WReducer