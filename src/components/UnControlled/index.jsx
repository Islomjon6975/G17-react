import React, { useState } from 'react'
import { useRef } from 'react'

export const Uncontrolled = () => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const [user, setUser] = useState({})

  const login = () => {
    setUser({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
    })
  }

  console.log(user)
  return (
    <div>
      <h1>Uncontrolled {}</h1>
      <input type="text" ref={firstName} placeholder='firstname'  />
      <input type="text" ref={lastName} placeholder='firstname'  />
      <input type="text" ref={email} placeholder='firstname'  />
      <button onClick={login}>Login</button>
    </div>
  )
}
