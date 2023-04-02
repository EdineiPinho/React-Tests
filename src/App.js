import React from 'react'
import Select1 from './FormComponents/Select1'
import Input1 from './FormComponents/Input1'

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  return (
    <>
      <Select1 options={['smartphone', 'tablet']} value={produto} setValue={setProduto} />
      <Input1 id="nome" label="Nome" type="text" value={nome} setValue={setNome} required />
      <Input1 id="email" label="Email" type="email" value={email} setValue={setEmail} />
    </>
  )
}

export default App