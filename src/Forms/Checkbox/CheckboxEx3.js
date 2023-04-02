import React from 'react'

const Checkbox = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  return (
    <>
      {coresArray.map((cor, index) => (
        <label key={index} style={{
          textTrans
            : 'capitalize'
        }}>
          <input
            type='checkbox'
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />
          {cor.charAt(0).toUpperCase() + cor.slice(1)}
        </label>
      ))}
      {cores && <p>{cores}</p>}
    </>
  )
}

export default Checkbox