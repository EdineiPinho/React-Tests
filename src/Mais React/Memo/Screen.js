import React from 'react'
import Header from './Header'

const Screen = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Header />
      <p>{contar}</p>
      <button onClick={() => setContar(contar + 1)}>Contar +</button>
    </div>
  )
}

export default Screen