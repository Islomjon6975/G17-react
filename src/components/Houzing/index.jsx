import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Houzing = () => {

  const [data, setData] = useState([])
  const emailRef = useRef()
  const passwordRef = useRef()
  const countryRef = useRef()
// GET, POST, DELETE, PUT, PATCH
  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list?country=${countryRef}&room=5`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
            .then(res=>res.json())
            .then(res=>setData(res))
  }, [])

  const login = () => {
    console.log(emailRef.current.value, passwordRef.current.value)
    fetch('https://houzing-app.herokuapp.com/api/public/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value })
    }).then(res => res.json()).then((res) => localStorage.setItem('token', res?.authenticationToken))
  }

  console.log(data);
  return (
    <div>
      <div className="form">
        <input ref={emailRef} type="email" placeholder='email' className="email" />
        <input ref={passwordRef} type="password" placeholder='password' className="password" />
        <button onClick={login}>login</button>

        <input type="text" ref={countryRef} />
      </div>
    </div>
  )
}
