import React from 'react'

const Radio1 = ({ options, name, value, setValue, ...props }) => {
  return (
    <>
      <h3>Escolha:</h3>
      {options.map((option) =>
        <label key={option}>
          <input name={name} type='radio' value={option} checked={value === option} onChange={({ target }) => setValue(target.value)} {...props} />
          {option}
        </label>
      )}
    </>
  )
}

export default Radio1