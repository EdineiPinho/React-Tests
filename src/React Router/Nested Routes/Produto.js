import React from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCostumizado from './ProdutoCostumizado';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
  const params = useParams();
  const nome = params.id.charAt(0).toUpperCase() + params.id.slice(1);
  return (
    <div>
      <h1>Produto: {nome}</h1>
      <nav>
        <NavLink to=''>Descrição</NavLink>
        <NavLink to='avaliacao'>Avaliação</NavLink>
        <NavLink to='customizado'>Customizado</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<ProdutoDescricao />} />
        <Route path='avaliacao' element={<ProdutoAvaliacao />} />
        <Route path='customizado' element={<ProdutoCostumizado />} />
      </Routes>
    </div>
  )
}

export default Produto