import React from 'react'
import { Navbar } from './Navbar'
import Products from './Products'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Products />
    </Container>
  )
}
