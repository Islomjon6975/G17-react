import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const Axios = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    axios({
      url: 'https://fakestoreapi.com/products?limit=5',
      method: "GET",
      headers: {}
    }).then((response) => setState(response?.data))
  }, [])
  console.log(state, 'axios')

  return (
    <div>
      <h1>Axios</h1>
      {
        state?.map((value) => {
          return (
            <div key={value.id}>
              {value?.id} - {value?.title} - {value?.price}
              <img src={value?.image} alt={value?.title} width='100px' height={'100px'} />
            </div>
          )
        })
      }
    </div>
  )
}
