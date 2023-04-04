import React from 'react'
import Produto from './Produto'

const Screen = () => {
  const [ativar, setAtivar] = React.useState(false);
  return (
    <>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </>
  )
}

export default Screen