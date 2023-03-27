import React from 'react';
import Produto from './Produto';

const HookUseEffect = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem('dados')) {
      const produto = localStorage.getItem('dados');
      fetchProduct(produto)
    }
  }, [])

  async function fetchProduct(e) {
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e}`);
    const json = await response.json();
    setDados(json);
  }

  function handleClique(e) {
    const produto = (e.target.innerText).toLowerCase();
    fetchProduct(produto);
    localStorage.setItem('dados', produto)
  }

  function limparPreferencia() {
    localStorage.clear();
    setDados(null);
  }

  console.log(dados);
  return (
    <div>
      <button style={{ marginRight: "12px" }} onClick={handleClique}>Notebook</button>
      <button onClick={handleClique}>Smartphone</button>
      {dados && <Produto dados={dados} />}
      <br />
      <br />
      <button onClick={limparPreferencia}>Limpar preferência</button>
    </div>
  )
}

export default HookUseEffect;