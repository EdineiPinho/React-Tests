import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <Input id="email" label="Email" type="email" placeholder="Seu email" required />
      <Input id="senha" label="Senha" type="password" placeholder="Sua senha" />
      <Button>Clique</Button>
    </form >
  )
}

export default Form