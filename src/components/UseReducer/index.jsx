import React, {useReducer} from 'react'
import { reducer } from './reducer'
const mock = [
  {id: 1, title: 'olma'},
  {id: 2, title: 'nok'},
  {id: 3, title: 'banan'},
  {id: 4, title: 'behi'},
]
export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('data')))
  localStorage.setItem('data', JSON.stringify(state))
  return (
    <div>
      <h1>UseReducer: {state.data.length}</h1>
      <input type="text" placeholder='Search...' onChange={(e) => dispatch({type: 'onChange', payload: {value: e.target.value}})} />
      {
        state.data.map(value => {
          return (
            <div key={value.id}>
              {value.id} - {value.title} <button onClick={() => dispatch({type: 'delete', payload: {id: value.id}})}>Delete</button>
            </div>
          )
        })
      }
      <input value={state.title} type="text" placeholder='enter something' onChange={(e) => dispatch({type: 'onAddChange', payload: {value: e.target.value}})} />
      <button onClick={() => dispatch({type: 'add', payload: {newItem: {id: state.data.length + 1, title: 'bexi'}}})}>add</button>
    </div>
  )
}

export default UseReducer