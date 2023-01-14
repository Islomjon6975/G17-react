import React, { useState } from 'react'
import { data } from '../mock/mock'
import Navbar from './Navbar'
import Todo from './Todo'

export const Body = () => {

  
  return (
    <div>
      <Navbar  />
      <Todo  />
    </div>
  )
}
