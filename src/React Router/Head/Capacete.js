import React from 'react'
import { Helmet } from 'react-helmet'

const Capacete = () => {

  return (
    <Helmet>
      <title>Dogs | Home</title>
      <meta name='desciption' content='Essa é a descrição da página'></meta>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
    </Helmet>
  )
}

export default Capacete