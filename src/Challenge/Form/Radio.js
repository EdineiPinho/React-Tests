import React from 'react'

const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  if (active === false) return null;
  return (
    <fieldset style={{ padding: '2rem', border: '1px solid #ccc' }}>
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map(option => (
        <label key={option} style={{ marginBottom: '12px', fontFamily: "monospace" }}>
          <input type="radio" id={id} checked={value === option} value={option} onChange={onChange} style={{ marginRight: "8px" }} />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio