import React, {useContext, useEffect} from 'react'
import { Container } from './style'
import { FrontEnd } from '../../context/FrontEnd'

export const Navbar = () => {
  const [state, setState] = useContext(FrontEnd)
  return (
    <Container>
      <h1>Navbar {state.length}</h1>
    </Container>
  )
}

export default Navbar


// 