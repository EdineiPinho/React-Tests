import React from 'react'

const TextArea = () => {
  const [textarea, setTextarea] = React.useState('');
  return (
    <>
      <textarea
        value={textarea}
        onChange={({ target }) => (
          setTextarea(target.value)
        )}
      />
      <p>{textarea}</p>
    </>
  )
}

export default TextArea