import React from 'react'

const HookUseStatesMultiploEstados = () => {
  let [contar, setContar] = React.useState(0);
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: '', idade: '', profissao: '' })

  function handleForm(e) {
    console.log(this);
  }

  return (<React.Fragment>
    <p>Contador = {contar}</p>
    <button disabled={ativo} onClick={() => { setContar(contar++) }}>+ 1</button>
    <button disabled={ativo} onClick={() => { setContar(contar = 0) }}>0</button>
    <button disabled={ativo} onClick={() => { setContar(contar--) }}>- 1</button>
    <br />
    <br />
    <button onClick={() => { setAtivo(!ativo) }} >Des/Habilitar contadores</button>
    <br />
    <br />
    <br />
    <h2 style={{ fontFamily: 'sans-serif' }}>Formulário:</h2>
    <form>
      <label for='nome'>Nome:</label>
      <input id='nome' style={{ width: '500px' }} type="text" />
      <br />
      <label for='idade'>Idade:</label>
      <input id='idade' style={{ width: '100px' }} type="Number" />
      <br />
      <label for='profissao'>Profissão:</label>
      <input id='profissao' style={{ width: '300px' }} type="text" />
      <br />
      <button>Enviar</button>
    </form>
  </React.Fragment >);
};

export default HookUseStatesMultiploEstados;
