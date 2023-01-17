import React, { useCallback, useMemo, useState } from 'react'
import { Child } from '../Child'

export const Parent = () => {
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  console.log('Parent Component')

  const data = useMemo(() => {
    return {name: 'Jack', address: 'US'}
  }, [])

  const usecall = useCallback((hi) => {
    console.log(hi)
    return {name: 'Jack', address: 'US'}
  }, [])

  return (
    <div>
      <h1>Parent {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <input type="text" onChange={(e) => setInput(e.target.value)} />

      <Child title='John' usecall={usecall}  data={data} />
      
    </div>
  )
}
