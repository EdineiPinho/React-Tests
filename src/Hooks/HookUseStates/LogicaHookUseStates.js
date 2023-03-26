import React from 'react'

const LogicaHookUseStates = () => {
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];
  console.log(ativoValor);

  function handleClick() {
    atualizaValor(!ativoValor);
  }

  return (<React.Fragment>
    <button onClick={handleClick}>UseStates: {ativoValor ? "Ativo" : "Inativo"}</button>
  </React.Fragment>);
};

export default LogicaHookUseStates;
