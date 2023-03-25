import React from 'react';
import Titulo from './Titulo';
import Header from './Header';
import Footer from "./Footer";
import Form from "./Form/Form";

const App = () => {
  return (<React.Fragment>
    <Header />
    <Titulo cor="cyan" texto="Meu título 1">Aqui dentro é o children</Titulo>
    <Form />
    <Footer classe="footer" />
  </React.Fragment>);
};

export default App;
