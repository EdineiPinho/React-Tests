import React from 'react'

const Radio = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [textcolor, setTextcolor] = React.useState('');
  return (
    <>
      <h2>Escolha seu produto</h2>
      <label>
        <input
          type='radio'
          name='produto'
          value='notebook'
          id='notebook'
          onClick={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type='radio'
          name='produto'
          value='smartphone'
          id='smartphone'
          onClick={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>
      {produto && <p>O produto selecionado foi: <b style={{ color: `${textcolor && textcolor}` }}>{produto.charAt(0).toUpperCase() + produto.slice(1)} {cor && cor}</b></p >}
      <h3>Escolha uma cor</h3>
      <label>
        <input
          type='radio'
          name='cor'
          value='vermelho'
          id='firebrick'
          onClick={({ target }) => setCor(target.value)}
          onChange={({ target }) => setTextcolor(target.id)}
        />
        Vermelho
      </label>
      <label>
        <input
          type='radio'
          name='cor'
          value='azul'
          id='dodgerblue'
          onClick={({ target }) => setCor(target.value)}
          onChange={({ target }) => setTextcolor(target.id)}
        />
        Azul
      </label>
    </>
  )
}

export default Radio