import React from 'react'
import Produtos from './HookUseStatesAPI/Produtos';

const HookUseStatesAPI = () => {
  const [dados, setDados] = React.useState();
  const [carregando, setCarregando] = React.useState(null);


  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <React.Fragment>
      <button style={{ margin: '8px' }} onClick={handleClick}>smartphone</button>
      <button style={{ margin: '8px' }} onClick={handleClick}>notebook</button>
      <button style={{ margin: '8px' }} onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />}
    </React.Fragment>
  );
};

export default HookUseStatesAPI