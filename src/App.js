import React from 'react'
import Input1 from './FormComponents/Input1'

const App = () => {
  const cep = useForm('cep');

  function handleSubmit(event) {
    event.preventDefault();
    if (true) console.log('Enviou!')
    else console.log("Insira um CEP válido para enviar o formulário.")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input1
        id='cep'
        label='cep'
        type='text'
        value={cep.value}
        placeholder="00000-000"
        required />
      <button>Enviar</button>
    </form>
  )
}
  ;
export default App