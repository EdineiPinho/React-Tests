import React from 'react';

const HookUseRef = () => {
  const [task, setTask] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();
  const listElements = React.useRef();
  const estiloBotao = {
    width: '32px',
    height: '32px',
    marginLeft: '12px',
    color: 'red',
    cursor: 'pointer'
  };
  function handleClick() {
    setTask([...task, input]);
    setInput('');
    inputElement.current.focus();
  }
  function excluirTarefa(e) {
    const indexNumber = e.currentTarget.parentElement.id[2];
    const tarefas = [...task];
    tarefas.splice(indexNumber, 1);
    setTask(tarefas);
  }

  return (
    <React.Fragment>
      <ul ref={listElements}>
        {task.map((tarefa, index) => (
          <li id={`id${index}`} key={index} className="listItem">{tarefa}<a style={estiloBotao} title="Excluir tarefa" onClick={excluirTarefa}>x</a></li>
        ))}
      </ul>
      <label for='tasks'>Nova Tarefa</label>
      <input
        ref={inputElement}
        type="text"
        id='tasks'
        placeholder='Digite sua tarefa aqui...'
        value={input}
        onChange={
          ({ target }) => setInput(target.value)
        } />
      <br />
      <button onClick={handleClick}>Adicionar Tarefa</button>
    </React.Fragment>)
}

export default HookUseRef;