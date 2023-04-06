import React from 'react'
// import Contato from './Contato'
const Contato = React.lazy(() => import('./Contato'))

const Screen = () => {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <div>
      {ativo && (
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </React.Suspense>
      )}
      <button onClick={() => setAtivo(!ativo)}>{'(Des)Ativar'}</button>
    </div>
  )
}

export default Screen