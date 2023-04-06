import React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'remover':
      return state.filter(item => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const WReducer2 = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva'])
  return (
    <div>
      <h3>Frutas:</h3>
      <ul>
        {state.map((fruta) => (<li>{fruta}</li>))}
      </ul>
      <button onClick={() => dispatch({ type: 'remover', content: 'Banana' })}>Remover Banana</button>
      <button onClick={() => dispatch({ type: 'adicionar', content: 'Limão' })}>Adicionar Limão</button>
    </div>
  )
}

export default WReducer2