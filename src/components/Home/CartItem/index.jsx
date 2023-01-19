import React, { memo } from 'react'
import { Box, Button, Container, Image, ImageWrapper, Price, Title, Wrapper } from './style'

export const CartItem = ({value, dispatch}) => {
  console.log('cartItem')
  return (
    <Container>
      <ImageWrapper>
        <Image src={value.image} alt={value.title} loading='lazy' />
      </ImageWrapper>
      <Wrapper>
        <Title>{value.title}</Title>
        <Price>Price: $ {value.price}</Price>
        <Price>Total: $ {value.price * value.count}</Price>
      </Wrapper>
      <Box>
        <Button  onClick={() => dispatch({type: 'decrement', payload: {id: value.id}})}>-</Button>
        <Price>{value.count}</Price>
        <Button  onClick={() => dispatch({type: 'increment', payload: {id: value.id}})}>+</Button>
        <Button onClick={() => dispatch({type: 'delete-cart', payload: {id: value.id}})}>Trash</Button>
      </Box>
    </Container>
  )
}

export default memo(CartItem)
