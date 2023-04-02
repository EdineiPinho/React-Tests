import React from 'react'

const Checkbox = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  function handleCheck(cor) {
    return cores.includes(cor);
  }

  return (
    <>
      <label>
        <input
          type='checkbox'
          value='vermelho'
          checked={cores.includes('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input
          type='checkbox'
          value='azul'
          checked={handleCheck('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
      <br /><br />
      {cores}
      {console.log(cores)}
    </>
  )
}

export default Checkbox