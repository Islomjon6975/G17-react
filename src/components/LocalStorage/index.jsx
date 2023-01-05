import React, { useState } from 'react'
import { mock } from '../../mock/mock'
import './style.css'

export const Localstorage = () => {
  // const [state, setState] = useState({data: JSON.parse(localStorage.getItem('data')) || mock})

  // const onDelete = (id) => {
  //   let res = state.data.filter((value) => value.id !== id)
  //   localStorage.setItem('data', JSON.stringify(res))
  //   setState({data: res})
  // }

  // console.log(JSON.parse(JSON.stringify(state.data)))
  return (
    <div>
      {/* {
        state.data.map((value) => {
          return(
            <p key={value.id}>{value.id} - {value.title} <button onClick={() => onDelete(value.id)}>delete {value.id}</button></p>
          )
        })
      } */}
      <div className="container">
        {
          mock.map(value => {
            return(
              <div className="item-1" key={value.id}>{value.id} - {value.title}</div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Localstorage

// set