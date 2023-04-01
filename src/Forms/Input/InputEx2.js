import React from 'react'

const Input = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('inscicao').style.display = "block";
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Seu nome:</label>
      <input
        id='nome'
        type='text'
        value={form.nome}
        name="nome"
        placeholder='Digite aqui seu nome'
        onChange={handleChange} />
      <label htmlFor='email'>Seu email:</label>
      <input
        id='email'
        type='text'
        value={form.email}
        name="email"
        placeholder='Digite aqui seu email'
        onChange={handleChange} />
      <button>Enviar</button>
      <p id="inscicao" style={{ display: 'none' }}>Olá, {form.nome}. Enviamos um email para {form.email}, clique no link para confirmar sua inscrição.</p>
    </form>
  )
}

export default Input