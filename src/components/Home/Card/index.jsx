import React from 'react'
import { Button, Container, Content, Image, ImageWrapper, Price, Title } from './style'

export const Card = (props) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={props?.value?.image} alt={props?.value?.title || 'product'} loading='lazy'/>
      </ImageWrapper>
      <Content>
        <Title>{props?.value?.title || 'Product'}</Title>
        <Price  >${props?.value?.price || 100}</Price>
      </Content>
        <Button onClick={()=> props.dispatch({type: 'add-to-cart', payload: {value: {...props.value, count: props.value.count + 1}}})}>Add to Cart {props?.value?.id}</Button>
        {/* <Button onClick={() => props.dispatch({type: 'delete', payload: {id: props.value.id}})}>Delete {props?.value?.id}</Button> */}
    </Container>
  )
}
