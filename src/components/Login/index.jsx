import React from 'react'
import { useRef } from 'react';

export const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()

  const login = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
        // expiresInMins: 60, // optional
        // atuny0
        // 9uQFF1Lh
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res?.token)
    }
      );

  }
  return (
    <div>
      <h1>Login</h1>
      <input ref={usernameRef} type="text" placeholder='atuny0' />
      <input ref={passwordRef} type="text" placeholder='9uQFF1Lh' />
      <button onClick={login}>login</button>
    </div>
  )
}
