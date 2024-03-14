import { useState } from 'react'
import {Nav} from "./styles";

export function Header() {
  const [count, setCount] = useState(0)

  return (
    <Nav>
      <h1>Site de Cadastro!</h1>
    </Nav>
  )
}


