import React, {useState} from 'react'

const FunctionalComponents = () => {

  const [state, setState] = useState({count: 0, name: 'salom', age: 19})
  console.log(state)

  const plus = () => {
    setState({...state, count: state.count + 1})
  }

  const minus = () => {
    setState({...state, count: state.count - 1})
  }

  const onChange = (e) => {
    setState({...state, name: e.target.value})
  }

  const onAge = (e) => {
    setState({...state, age: e.target.value})
  }

  return (
    <div>
      <h1>FunctionalComponents {state.count} - {state.name} - {state.age}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <input type="text" onChange={onChange} />
      <input type="number" onChange={onAge} />
    </div>
  )
}

export default FunctionalComponents