import React, {createContext, useReducer} from 'react'
import { data } from '../../../utils/data.js';

export let ProductsContext = createContext();

const ProductsContainerProvider = ({children}) => {
  const [state, dispatch] = useReducer((state,action) => {
    switch(action.type) {
      case 'delete': {
        let res = state.product.filter((value) => value.id !== action.payload.id)
        return {...state, product: res}
      }
      case 'add-to-cart': {
        console.log(action.payload.value, 'value')
        return {...state, cart: [...state.cart, action.payload.value]}
      }
      case 'delete-cart' : {
        let res = state.cart.filter((value) => value.id !== action.payload.id)
        return {...state, cart: res}
      }
      // Increment
      case 'increment': {
        let res = state.cart.map(value=> value.id === action.payload.id ? {...value, count: value.count + 1}: value)
        return {...state, cart: res}
      }
      case 'decrement': {
        let res = state.cart.map(value=> value.id === action.payload.id && value.count > 1 ? {...value, count: value.count - 1}: value)
        return {...state, cart: res}
      }
      default: 
        return state;
    }
  }, localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {product: data, cart: []})

  localStorage.setItem('state', JSON.stringify(state))
  
  return (
  <ProductsContext.Provider value={[state, dispatch]}>
    {children}
  </ProductsContext.Provider>
  )
}

export default ProductsContainerProvider