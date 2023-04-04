import React from 'react'
import styled from 'styled-components'

const aleatorio = Math.random() * 360;

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produtos = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2.5rem;
  font-family: 'sans-serif' !important;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1rem;
  color: green;
`;

const Preco = styled.p`
  background: hsl(${aleatorio}, 100%, 50%);
  color: hsl(${aleatorio - 180}, 50%, 100%);
`;

const Comprar = styled.button`
  background: ${({ ativo }) => ativo ? "#000" : "#fff"};
font-size: 1rem;
border: 2px solid #000;
border-radius: 5px;
padding: 0.5rem;
color: white;
cursor: pointer;
&:hover {
  background: tomato;
}
`;

const StyleComponents = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <>
      <ProdutosContainer>
        <Produtos>
          <Titulo>Laptop</Titulo>
          <Paragrafo>Um laptop compacto que vai te fornecer muita portabilidade.</Paragrafo>
          <Preco>R$ 3.200,00</Preco>
          <Comprar ativo={ativo} onClick={handleClick}>Comprar aqui</Comprar>
        </Produtos>
        <Produtos>
          <Titulo>Smartphpne</Titulo>
          <Paragrafo>Um parágrafo que foi feito usando Styled-Components.</Paragrafo>
          <Preco>R$ 2.400,00</Preco>
          <Comprar ativo={ativo} onClick={handleClick}>Comprar aqui</Comprar>
        </Produtos>
      </ProdutosContainer>
    </>
  )
}

export default StyleComponents