import React, { lazy } from 'react'
import { Navbar } from './Navbar'
import { Container } from './style'
const Products = lazy(() => import('./Products/index.jsx'))


export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Products />
    </Container>
  )
}
