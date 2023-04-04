import React from 'react'
import Input1 from './/FormComponents/customHooksValidation/Input1'
import useForm from './FormComponents/customHooksValidation/useForm';

const App = () => {
  const nome = useForm();
  const sobrenome = useForm(false);
  const email = useForm('email');
  const cep = useForm('cep');

  let erro;
  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validade() && email.validade() && nome.validade()) {
      console.log('Enviou!')
      erro = true;
    }
    else erro = false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input1
        id='nome'
        label='Nome:'
        type='text'
        placeholder="Seu Nome"
        {...nome}
      />
      <Input1
        id='sobrenome'
        label='Sobrenome:'
        type='text'
        placeholder="Sobrenome"
        {...sobrenome}
      />
      <Input1
        id='email'
        label='Email:'
        type='email'
        placeholder="dominio@email.com"
        {...email}
      />
      <Input1
        id='cep'
        label='CEP:'
        type='text'
        placeholder="00000-000"
        {...cep}
      />
      {!erro && <p>Insira um valores válidos para enviar o formulário.</p>}
      <button>Enviar</button>
    </form>
  )
};

export default App;