import React from 'react'
import Input1 from './FormComponents/Input1'

const App = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validadeCep(value) {
    if (value.length === 0) {
      setError('Preenchar um valor.');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido.');
      return false;
    } else {
      setError(null)
      return true;
    }
  }

  function handleBlur({ target }) {
    console.log(validadeCep(target.value));
  }

  function handleChange({ target }) {
    if (error) validadeCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validadeCep(cep)) console.log('Enviou!')
    else console.log("Insira um CEP válido para enviar o formulário.")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input1
        id='cep'
        label='cep'
        type='text'
        value={cep}
        setValue={setCep}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="00000-000"
        required />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}
  ;
export default App