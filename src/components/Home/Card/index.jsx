import React from 'react'
import { Button, Container, Content, Image, ImageWrapper, Price, Title } from './style'
import {  message, Space } from 'antd';

export const Card = (props) => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: `${props.value.id} has been added to cart`,
    });
  };

  return (
    <Container>
      <ImageWrapper>
        <Image src={props?.value?.image} alt={props?.value?.title || 'product'} loading='lazy'/>
      </ImageWrapper>
      <Content>
        <Title>{props?.value?.title || 'Product'}</Title>
        <Price  >${props?.value?.price || 100}</Price>
      </Content>
      {contextHolder}
      <Space>
        <Button onClick={success}>
          <Button onClick={()=> props.dispatch({type: 'add-to-cart', payload: {value: {...props.value, count: props.value.count + 1}}})}>Add to Cart {props?.value?.id}</Button>
        </Button>
      </Space>
        {/* <Button onClick={() => props.dispatch({type: 'delete', payload: {id: props.value.id}})}>Delete {props?.value?.id}</Button> */}
    
    </Container>
  )
}
