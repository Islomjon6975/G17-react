import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../context/Products'
import { Card } from '../Card'
import { Container, ProductsContainer, Search, Wrapper } from './style'

export const Products = () => {
  const [state, dispatch] = useContext(ProductsContext) 
  
  return (
    <Container>
      <Wrapper>
        <Wrapper.Box>
          <Search placeholder='Search...' onChange={(e) => dispatch({type: 'search', payload: {value: e.target.value}})} />
          <select onChange={(e) => dispatch({type: 'filter', payload: {value: e.target.value}})}>
            <option value="increment">Default</option>
            <option value="increment">Hight Price</option>
            <option value="decrement">Low Price</option>
          </select>
        </Wrapper.Box>

        <ProductsContainer>
          {
            state.product.map((value) => (
              <Card dispatch={dispatch} key={value?.id} value={value} />
            ))
          }
        </ProductsContainer>
      </Wrapper>
    </Container>
  )
}

export default Products