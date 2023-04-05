import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Essa é a página Home e também a principal páginda do nosso site, aqui você vai ter um resumo de todos os produtos e serviços que prestamos.</p>
      <Link to="produto/notebook">Notebook</Link>{' | '}
      <Link to="produto/smartphone">Smartphone</Link>
    </>

  )
}

export default Home