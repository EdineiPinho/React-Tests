import React from 'react'

const Select = () => {
  const [select, setSelect] = React.useState('');
  return (
    <>
      <label htmlFor='produtos'>Selecione seu produto:{' '}
        <span style={{
          color: 'cyan',
          textShadow: '1px 1px 2px rgba(0,255,255,.9)'
        }}>
          {select.charAt(0).toUpperCase() + select.slice(1)}
        </span >
      </label>
      <select
        id='produtos'
        onChange={({ target }) => setSelect(target.value)}
        value={select}
      >
        <option disabled value=''>Selecione</option>
        <option value='notebook'>Notebook</option>
        <option value='smartphone'>Smartphone</option>
        <option value='tablet'>Tablet</option>
      </select>
    </>
  )
}

export default Select