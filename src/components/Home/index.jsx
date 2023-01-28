import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

export const Home = () => {
  const [data, setData] = useState([]) 
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100&skip=90&select=OPPOF19,280', {
      method: 'GET', /* or POST/PUT/PATCH/DELETE */
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json'
      }, 
    })
    .then(res => res.json())
    .then((res) => setData(res?.products));
  }, []) 
  return (
    <div>
      <h1>Home</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '30px'}}>
        {
          data.map((value) => (
            <div onClick={() => navigate(`${location.pathname}/:${value.id}`)} style={{border: '1px solid black'}}>
              <img width={'200px'} height={'200px'} src={value?.images[0]} alt="" />
              <h4>{value?.title}</h4>
              <h4>{value?.price}</h4>
            </div>
          ))
        }
      </div>

    </div>
  )
}
