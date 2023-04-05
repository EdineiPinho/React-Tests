import React from 'react'
import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

let anterior = '';
let atual = document.location.pathname;
function rota() {
  setInterval(() => {
    if (document.location.pathname !== atual) {
      anterior = atual;
      atual = document.location.pathname;
    }
    analise();
  }, 200);
}
function analise() {
  const arrayEl = document.querySelectorAll('nav.link a');
  for (let i = 0; i < arrayEl.length; i++) {
    if (arrayEl[i].attributes.href.value === document.location.pathname) {
      arrayEl[i].classList.add("ativo");
      ultimoTarget = arrayEl[i];
    } else if (arrayEl[i].classList.contains('ativo')) {
      arrayEl[i].classList.remove('ativo');
    }
  }
}
let ultimoHref = document.location.pathname;
let ultimoTarget = '';

const Header = () => {
  const location = useLocation();
  React.useEffect(() => {
  }, [location]);

  console.log(location);
  rota();
  function handleClick({ target }) {
    let pagina = target.attributes.href.value;
    if (pagina !== ultimoHref) {
      ultimoHref = target.attributes.href.value;
      if (ultimoTarget) {
        target.classList.toggle("ativo");
        ultimoTarget.classList.toggle("ativo");
      } else {
        target.classList.toggle("ativo");
      }
      ultimoTarget = target;
    }
  }
  const activeStyle = {
    color: 'tomato',
  };
  setTimeout(() => { analise() }, 1)
  return (
    <>
      <nav>
        <a href='/'><img src='../../Assets/R.png' width='65px' alt='logo home' /></a>
        <ul>
          <li><a href='/' onClick={handleClick}>Home</a></li>
          <li><a href='/sobre'>Sobre</a></li>
          <li><a href='/contato'>Contato</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>
      </nav>
      <hr />
      <nav className='link'>
        <Link to="/" onClick={handleClick}>Home</Link>
        <Link to="sobre" onClick={handleClick}>Sobre</Link>
        <Link to="contato" onClick={handleClick}>Contato</Link>
        <Link to="login" onClick={handleClick}>Login</Link>
      </nav>
      <hr />
      <nav>
        <NavLink to="/" end activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="sobre" activeStyle={activeStyle}>
          Sobre
        </NavLink>
        <NavLink to="contato" activeStyle={activeStyle}>
          Contato
        </NavLink>
        <NavLink to="login" activeStyle={activeStyle}>
          Login
        </NavLink>
      </nav>
    </>
  )
}

export default Header