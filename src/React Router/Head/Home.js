import React from 'react'
import { Link } from 'react-router-dom'
import Capacete from './Capacete'

const Home = () => {
  return (
    <main>
      <Capacete />
      <h1>Home</h1>
      <p>Essa é a página Home e também a principal páginda do nosso site, aqui você vai ter um resumo de todos os produtos e serviços que prestamos.</p>
      <Link to="produto/notebook">Notebook</Link>{' | '}
      <Link to="produto/smartphone">Smartphone</Link>
    </main>

  )
}

export default Home