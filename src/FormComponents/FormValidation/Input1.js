import React from 'react'

const Input1 = ({ id, label, type, value, setValue, onChange, ...props }) => {
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
          {...props}
        />
      </div>
    </>
  )
}

export default Input1