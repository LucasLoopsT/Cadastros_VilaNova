import { useState } from 'react'

export function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Seja bem vindo!</h2>
      <p>Cadastre seus usuários e depois pesquise!</p>
    </>
  )
}


