import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header'
import Sobre from './Sobre';
import Home from './Home';
import NaoEncontrada from './NaoEncontrada';


const Screen = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Screen