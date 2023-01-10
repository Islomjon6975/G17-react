import React, {useReducer} from 'react'
import { reducer } from './reducer'
const mock = [
  {id: 1, title: 'olma'},
  {id: 2, title: 'nok'},
  {id: 3, title: 'banan'},
  {id: 4, title: 'behi'},
]

export const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, {data: mock, title: 'useReducer', seleted: {}})
  return (
    <div>
      <h1>UseReducer {state.title} {state.data.length}</h1>
      <input type="text" onChange={(e) => dispatch({type: 'search', payload: {value: e.target.value}})} />
      {
        state.data.map((value) => {
          console.log(value)
          return (
            <div key={value.id}>
              {value.id} 
              {state.seleted.id === value.id 
              ? 
              <input value={state.seleted.title} onChange={(e) => dispatch({type: 'onUpdateChange', payload: {value: e.target.value}})} /> 
              : 
              value.title} 
              <button onClick={() => dispatch({type: 'delete', payload: {id: value.id}})}>Delete</button> 
              {state.seleted.id === value.id 
              ? 
              <button onClick={() => dispatch({type: 'save'})}>Save</button> 
              : 
              <button onClick={() => dispatch({type: 'update', payload: {fruit: value}})}>update</button>}
            </div>
          )
        })
      }
      <input value={state.title} type="text" onChange={(e) => dispatch({type: 'onChange', payload: {value: e.target.value}})} />
      <button onClick={() => dispatch({type: 'add'})}>add</button>
    </div>
  )
}

export default UseReducer