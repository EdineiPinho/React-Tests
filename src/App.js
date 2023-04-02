import React from 'react'
import Input1 from './FormComponents/Input1'

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <div>
      <Input1 label="Nome" id="nome" type="text" value={nome} setValue={setNome} required />
      <Input1 label="Email" id="email" type="text" value={email} setValue={setEmail} />
    </div>
  )
}

export default App