import React from 'react'

const Input = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');


  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('inscicao').style.display = "block";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Seu nome:</label>
      <input
        id='nome'
        type='text'
        value={name}
        name="nome"
        placeholder='Digite aqui seu nome'
        onChange={({ target }) => setName(target.value)} />
      <label htmlFor='email'>Seu email:</label>
      <input
        id='email'
        type='text'
        value={email}
        name="email"
        placeholder='Digite aqui seu email'
        onChange={({ target }) => setEmail(target.value)} />
      <button>Enviar</button>
      <p id="inscicao" style={{ display: 'none' }}>Olá, {name}. Enviamos um email para {email}, clique no link para confirmar sua inscrição</p>
    </form>
  )
}

export default Input