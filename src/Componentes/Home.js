import React from 'react'
import Header from './Header'
import Titulo from './Titulo'

const Home = () => {
  return (
    <div>
      <Header />
      <Titulo texto="Esta é a home." />
      <p>Visita nossa página de produtos e adquira logo o seu.</p>
    </div>
  )
}

export default Home