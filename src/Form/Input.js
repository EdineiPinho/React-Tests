import React from 'react'

const Input = ({ label, id, type, placeholder, ...props }) => {
  return (
    <div id="inputWrap" style={{ margin: '1rem 0', width: '50%' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...props} />
    </div>
  )
}

export default Input