import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../React Router/Router/Home'
import NaoEncontrada from '../React Router/Router/NaoEncontrada'
import Sobre from '../React Router/Router/Sobre'

const Screen = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Screen