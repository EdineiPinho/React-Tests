import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const UsingBootstrap = () => {
  return (
    <>
      <div className='card bg-dark text-white m-5' style={{ maxWidth: '18rem' }}>
        <div className='card-header'>Notebook</div>
        <div className='card-body'>
          <h5 card-title>R$ 2500,00</h5>
          <p className='card-text'>Compre um notebook e tenha a liberdade de trabalhar, estudar ou se divertir de onde quiser! Com a nossa linha de notebooks, você terá um companheiro portátil e eficiente para todas as suas tarefas do dia a dia.</p>
        </div>
      </div>
    </>
  )
}

export default UsingBootstrap