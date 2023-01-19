import React, { useState } from 'react'
import { useEffect } from 'react'

export const Fetch = () => {
  const [state, setState] = useState([])
  // const [user, setUser] = useState({
  //   firstName: 'Jack',
  //   email: 'jack@gmail.com'
  // })

  useEffect(() => {
    console.log('case 2')
    fetch(`https://fakestoreapi.com/products`, {
        method:"GET"
    })
        .then((response) => response.json())
        .then((response) => setState(response))
  }, [])
  console.log(state, 'state')

  return (
    <div>
      <h1>Fetch</h1>
      {
        // state?.map((value) => {
        //   return (
        //     <div key={value.id}>
        //       {value?.id} - {value?.title} - {value?.price}
        //       <img src={value?.image} alt={value?.title} width='100px' height={'100px'} />
        //     </div>
        //   )
        // })
      }
    </div>
  )
}

// GET, POST, DELETE PUT, PATCH