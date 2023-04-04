import React from 'react'

const Input1 = ({ id, label, type, value, onChange, onBlur, placeholder, error }) => {
  return (
    <>
      <div className={id}>
        <label htmlFor={id}> {label} </label>
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        {error && <p color='red'>{error}</p>}
      </div>
    </>
  )
}

export default Input1