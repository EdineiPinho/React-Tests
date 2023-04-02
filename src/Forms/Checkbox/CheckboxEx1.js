import React from 'react'

const Checkbox = () => {
  const [terms, setTerms] = React.useState(false);
  return (
    <>
      <label>
        <input
          id='terms'
          type='checkbox'
          value='termos'
          checked={terms}
          onChange={({ target }) => setTerms(target.checked)}
        />
        {' '}Li e aceito os termos.
      </label>
      {terms && <p>Você concordou com os termos.</p>}
    </>
  )
}

export default Checkbox