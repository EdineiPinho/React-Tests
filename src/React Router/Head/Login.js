import React from 'react'
import { useNavigate } from 'react-router-dom';
import Head from './Head';

const Login = () => {

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate('/');
  }
  return (
    <div>
      <Head title="Login" description='Essa é a descrição do Login' />
      <h1>Login</h1>
      <button onClick={handleClick}>Fazer login</button>
    </div>
  )
}

export default Login