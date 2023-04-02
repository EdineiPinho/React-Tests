// Exemplo Three

// Make a fetch (POST) to API below
// To creation be accepted it's necessary to send following datas:
// name, email, password, cep, street, number, neighbor, city, state

// This function will realize POST
/* fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // form is the object with form data
  body: JSON.stringify(form),
}); */

// Show a menssage on screen case positive response

import React from 'react'

const InputEx3 = () => {
  const [form, setForm] = React.useState({ name: '', email: '', password: '', cep: '', street: '', number: '', neighbor: '', city: '', state: '' });

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form is the object with form data
      body: JSON.stringify(form),
    })
      .then((response) => {
        response.json();
        setResponse(response);
      })
      .then((data) => {
        console.log('Sucesso', data);
        document.getElementById('message').innerText = "Formulário enviado com sucesso.";
        document.getElementById('message').style.display = "block";
        console.log(form);
        setTimeout(() => {
          document.getElementById('message').style.display = "none";
        }, 3000);
      })
      .catch((error) => {
        console.log('Erro: ', error);
        document.getElementById('message').innerText = "Erro ao enviar o furmário.";
        document.getElementById('message').style.display = "block";
        setTimeout(() => {
          document.getElementById('message').style.display = "none";
        }, 3000);
      });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }

  function handletype(type) {
    if (type === 'number' || type === 'email' || type === 'password') {
      return type
    }
    else return 'text';
  }
  function handleText(texto) {
    switch (texto) {
      case 'name':
        return 'Nome';
      case 'email':
        return 'Email';
      case 'password':
        return 'Senha';
      case 'cep':
        return 'CEP';
      case 'street':
        return 'Rua';
      case 'number':
        return 'Número';
      case 'neighbor':
        return 'Bairro';
      case 'city':
        return 'Cidade';
      case 'state':
        return 'Estado';
      default:
        return texto;
    }
  }

  return (
    <form onSubmit={handleSubmit} method='post' action="">
      {Object.keys(form).map((key) => (
        <div key={key}>
          <label htmlFor={key}>{handleText(key)}:</label>
          <input
            id={key}
            placeholder={handleText(key)}
            type={handletype(key)}
            onChange={handleChange}
          />
        </div>
      ))}
      <p id='message' style={{ display: 'none' }}>Formulário enviado.</p>
      {response && response.ok && <p>Formulário enviado</p>}
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default InputEx3;