import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

const UsingReactBootstrap = () => {


  return (
    <Card bg="dark" text="white" className='m-5' style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2.500,00</Card.Title>
        <Card.Text>Compre um notebook e tenha a liberdade de trabalhar, estudar ou se divertir de onde quiser! Com a nossa linha de notebooks, você terá um companheiro portátil e eficiente para todas as suas tarefas do dia a dia.</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UsingReactBootstrap