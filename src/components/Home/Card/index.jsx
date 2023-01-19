import React, { useState } from 'react'
import { Button, Container, Content, Image, ImageWrapper, Price, Title } from './style'
import {  message, Space,  Modal, Button as Btn } from 'antd';

export const Card = (props) => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: `${props.value.id} has been added to cart`,
    });
  };

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <Container>
      <ImageWrapper>
        <Image src={props?.value?.image} alt={props?.value?.title || 'product'} loading='lazy'/>
      </ImageWrapper>
      <Content>
        <Title>{props?.value?.title || 'Product'}</Title>
        <Price  >Category: {props?.value?.category}</Price>
        <Price  >${props?.value?.price || 100}</Price>
      </Content>
      {contextHolder}
      <Space>
        <Button onClick={success}>
          <Button onClick={()=> props.dispatch({type: 'add-to-cart', payload: {value: {...props.value, count: props.value.count + 1}}})}>Add to Cart {props?.value?.id}</Button>
        </Button>
        <Btn type="primary" onClick={showModal}>Edit</Btn>
      </Space>
        {/* <Button onClick={() => props.dispatch({type: 'delete', payload: {id: props.value.id}})}>Delete {props?.value?.id}</Button> */}
        <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{props.value.title}</p>
        <p>{props.value.price}</p>
        <p>{props.value.category}</p>
        <p>{props.value.category}</p>
        <p>{props.value.description}</p>
        <p>{props.value.image}</p>
      </Modal>
    </Container>
  )
}
