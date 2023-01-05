import React, {useEffect, useState} from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  // 1-holat
  useEffect(() => {
    console.log('1-holat')
  })
  // 2-holat
  useEffect(() => {
    console.log('2-holat')
    fetch('https://jsonplaceholder.typicode.com/users/10')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])
  // 3-holat
  useEffect(() => {
    console.log('3-holat')
  }, [input])
  //4-holat
  useEffect(() => {
    console.log('4-holat')
  }, [input, count])


  // -------------------------------------
  const plus = () => {
    setCount(count+1)
  }

  const minus = () => {
    setCount(count-1)
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  console.log(data, 'setData')

  return(
    <div>
      <h1>UseEffect: {count} -- {input}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <input type="text" onChange={onChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th>city</th>
            <th>street</th>
            <th>lat</th>
            <th>lng</th>
          </tr>
        </thead>
        <tbody>
          {/* {
            data?.map(value => {
              return (
                <tr key={value?.id}>
                  <td>{value?.id}</td>
                  <td>{value?.name}</td>
                  <td>{value?.phone}</td>
                  <td>{value?.email}</td>
                  <td>{value?.website}</td>
                  <td>{value?.address?.city}</td>
                  <td>{value?.address?.street}</td>
                  <td>{value?.address?.geo?.lat}</td>
                  <td>{value?.address?.geo?.lng}</td>
                </tr>
              )
            })
          } */}
          
        </tbody>
      </table>
    </div>
  )
}

export default UseEffect