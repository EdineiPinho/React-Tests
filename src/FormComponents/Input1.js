import React from 'react'

const Input1 = ({ id, label, type, value, setValue, ...props }) => {
  return (
    <>
      <div className={id}>
        <label htmlFor={id}> {label} </label>
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={({ target }) =>
            setValue(target.value)}
          {...props}
        />
      </div>
    </>
  )
}

export default Input1