import React from 'react';

const HookUseMemo = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    let localItem;
    if (window.localStorage.getItem('dados')) {
      localItem = window.localStorage.getItem('dados');
      console.log('Use memo foi ativado e HÁ item no localStorage')
      return localItem;
    }
    console.log('Use memo foi ativado e NÃO há item no localStorage')
    return null;
  }, [])
  console.log(valor);
  return (
    <>
      <button onClick={() => setContar(contar + 1)}>Contador= {contar}</button>
    </>
  );
}

export default HookUseMemo;