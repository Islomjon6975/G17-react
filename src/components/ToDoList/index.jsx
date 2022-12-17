import React, {Component} from 'react';
import {data} from '../../utils/data.js'
import './style.css'

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: data,
      selected: 'firstname'
    }
  }
  render() {
    const onDelete = (id) => {
      const res = this.state.students.filter(value => value.id !== id);
      this.setState({students: res});
    }

    const onSearch = (e) => {
      const search = data.filter(el => el[this.state.selected].toLowerCase().includes(e.target.value.toLowerCase()))
      this.setState({students: search})
      console.log(search, 'search')
    }

    const onSelect = (e) => {
      this.setState({selected: e.target.value})
    }
    console.log(this.state.selected, 'selected')

    return (
      <div className='container'>
        <h1>ToDoList</h1>
        {/* ------------------Search----------------- */}
        <input type="text" placeholder='Search' className="search" onChange={onSearch} />
        <select onChange={onSelect}>
          <option value="firstname">FirstName</option>
          <option value="lastname">LastName</option>
          <option value="district">District</option>
        </select>
        <table border={'1'}>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Username</th>
              <th>Email</th>
              <th>Tel</th>
              <th>Country</th>
              <th>Province</th>
              <th>Disctrict</th>
              <th>
               Update
              </th>
              <th>
               Delete
              </th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.students.map((value, index) => {
                  return(
                    <tr key={value.id}>
                      <td>{ value.id }</td>
                      <td>{ value.firstname }</td>
                      <td>{ value.lastname }</td>
                      <td>{ value.username }</td>
                      <td>{ value.email }</td>
                      <td>{ value.tel }</td>
                      <td>{ value.country }</td>
                      <td>{ value.province }</td>
                      <td>{ value.district }</td>
                      <td><button>Update</button></td>
                      <td><button onClick={() => onDelete(value.id)}>Delete</button></td>
                    </tr>
                  )
                })
              }
            
          </tbody>
        </table>
        
      </div>
    )
  }
}

export default ToDoList

// CRUD
// C -> create
// R -> read
// U -> update
// D -> delete