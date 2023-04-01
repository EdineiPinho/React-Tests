import React from 'react';
import useFetch from './Hooks/customHooks/useFetch';
import useLocalStorage from './Hooks/customHooks/useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/');
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (loading) return <div>Carregando...</div>
  if (error) return <p>{error}</p>
  if (data) {
    return (
      <>
        <p>Produto preferido = {produto}</p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </>
    );
  }
  else {
    return null;
  }
};

export default App;
