import React, { useContext } from 'react'
import { Beckend } from '../../context/Beckend'
import { FrontEnd } from '../../context/FrontEnd'

export const Todo = () => {
  const [state, setState] = useContext(FrontEnd)
  const [beckend, setBeckend] = useContext(Beckend)
  const onDelete = (id) => {
    let res = state.filter((value) => value.id !== id)
    setState(res)
  }
  
  const onDeleteBeckend = (id) => {
    let res = state.filter((value) => value.id !== id)
    setBeckend(res)
  }
  return (
    <div>
      <h1>Todo: </h1>
      {
        beckend.map((value) => {
          return (
            <div key={value.id}>{value.id} {value.title} <button  onClick={() => onDeleteBeckend(value.id)}>delete</button></div>
          )
        })
      }
      <hr />
{
        state.map((value) => {
          return (
            <div key={value.id}>{value.id} {value.title} <button  onClick={() => onDelete(value.id)}>delete</button></div>
          )
        })
      }
    </div>

  )
}

export default Todo