import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    console.log('Logou.');
    navigate('/');
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Fazer login</button>
    </div>
  )
}

export default Login