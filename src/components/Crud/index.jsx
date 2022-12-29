import React, {useState} from 'react'
import { data } from '../../mock';

const Crud = () => {
    const [state, setState] = useState({students: data})
    const [title, setTitle] = useState('')

    const onDelete = (id) => {
      let res = state.students.filter((value) => value.id !== id) 
      setState({...state, students: res})
    }

    const onChange = (e) => {
      const {value} = e.target
      setTitle(value)
    }

    const onAdd = () => {
      let newUser = {id: state.length + 1, title: title}
      setState({...state, students: [...state.students, newUser]})
    }

    return (
      <div>
        <h1>Hi 0</h1>
        {
          state.students.map((value) => {
            return(
              <div key={value.id}>
                {value.id} {value.title} <button onClick={() => onDelete(value.id)}>delete</button>
              </div>
            )
          })
        }
        <input type="text" placeholder='enter something' onChange={onChange} />
        <button onClick={onAdd}>Add</button>
      </div>
  )
}

export default Crud;