import React from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'CEP inválido'
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Não é um email'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validade(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preenchar um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null)
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validade(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validade(value),
    validade: () => validade(value),
  };
};

export default useForm;