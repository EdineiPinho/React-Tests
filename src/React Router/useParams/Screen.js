import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Sobre from './Sobre';
import Home from './Home';
import Contato from './Contato';
import Login from './Login';
import NaoEncontrada from './NaoEncontrada';
import Produto from './Produto';


const Screen = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Screen