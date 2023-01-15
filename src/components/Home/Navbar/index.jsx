import React, { useContext } from 'react'
import { Drawer } from 'antd';
import { useState } from 'react';
import { Basket, Container, Title, Total, Wrapper } from './style'
import { ProductsContext } from '../../context/Products';
import CartItem from '../CartItem';

export const Navbar = () => {
  const [state, dispatch] = useContext(ProductsContext)

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
        <Wrapper>  
        <Title>Products</Title>
        <Basket onClick={showDrawer}>Cart ({state.cart.length})</Basket>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          open={open}
          getContainer={false}
        >
          {
            state.cart.map((value) => {
              return (
               <CartItem value={value} dispatch={dispatch} />
              )
            })
          }
          <Total>Total: ${state.cart.reduce((total, current) => total + current.price * current.count,0)}</Total>
        </Drawer>
        
      </Wrapper>
    </Container>
  )
}


