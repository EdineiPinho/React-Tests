import React from 'react'

const HookUseStates = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (<React.Fragment>
    <button onClick={() => setAtivo(!ativo)}>UseStates: {ativo ? "Ativo" : "Inativo"}</button>
  </React.Fragment>);
};

export default HookUseStates