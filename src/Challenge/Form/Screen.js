import React from 'react'
import Radio from './Radio'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const Screen = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value })
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta,);
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick({ target }) {
    if (target.innerText === "Próxima" && slide < perguntas.length - 1) {
      setSlide(slide + 1);
    }
    else if (target.innerText === "Anterior" && slide > 1) {
      setSlide(slide - 1);
    }
    else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={perguntas.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {slide > 0 && slide < perguntas.length && <button onClick={handleClick}>Anterior</button>}
      {slide < perguntas.length && <button onClick={handleClick}>Próxima</button>}
      <br />
      {<p>{slide < perguntas.length && <span>{slide + 1} /</span>} {slide < perguntas.length && slide <= perguntas.length && perguntas.length}</p>}
      {resultado && <p>{resultado}</p>}
    </form >
  )
}

export default Screen