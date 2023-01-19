import React from 'react'
import { useState } from 'react'

export const ControlledComponent = () => {
  const [firstName, setFirstName] = useState('')

  const onChange = (e) => {
    setFirstName(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <h1>ControlledComponent {firstName}</h1>
      <input type="text" placeholder='firstname' onChange={onChange} />
    </div>
  )
}
