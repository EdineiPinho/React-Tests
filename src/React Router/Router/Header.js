import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <>
      <nav>
        <a href='/'><img src='../../Assets/R.png' width='65px' alt='logo home' /></a>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/sobre'>Sobre</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header