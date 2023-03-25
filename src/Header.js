import React from 'react'

const A = ({ href, classe, texto }) => {
  return (
    <a classe={classe} href={href}>
      {texto}
    </a>
  )
}

const Header = () => {
  return (
    <header style={{ display: "flex" }}>
      <ul>
        <li><A href="https://google.com.br" className="ancor" texto="Google" /></li>
        <li><A href="https://facebook.com.br" className="ancor" texto="Facebook" /></li>
        <li><A href="https://instagram.com.br" className="ancor" texto="Instagram" /></li>
      </ul>
    </header>
  )
}

export default Header