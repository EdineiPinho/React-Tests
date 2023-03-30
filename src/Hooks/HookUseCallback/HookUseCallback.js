import React from 'react'

const HookUseCallback = () => {
  const [contar, setContar] = React.useState(0);
  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);
  return (
    <>
      <button onClick={handleClick}>Contagem: {contar}</button>
    </>
  )
}

export default HookUseCallback