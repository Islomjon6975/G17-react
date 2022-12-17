import React, { Component } from 'react'
import './style.css'
import {Button} from '../Button/index'

const data = [
  {id: 1, title: "Something here"},
  {id: 2, title: "Something here"},
  {id: 3, title: "Something here"},
  {id: 4, title: "Something here"},
  {id: 5, title: "Something here"},
  {id: 6, title: "Something here"},
  {id: 6, title: "Something there"},
  {id: 6, title: "Something here"},
  {id: 6, title: "Something there"},
  {id: 6, title: "Something here"},
]


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: data
    }
  }


  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className="navbar">
            <h1 className="navbar-count">4 Tasks</h1>
            <h3 className="navbar-count-remain">4 Remain</h3>
          </div>
          <div className="tasks">
            <ul className="tasks-items">
              {
                this.state.tasks.map(value => {
                  return (
                    <li className="tasks-item">
                      <label>
                        <input type="checkbox" className='checkbox' />
                        <h3 className='tasks__title'>{value.title}</h3>
                      </label>
                      <Button>Delete</Button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="footer">
            <input type="text" className="add-input" />
            <Button>Add</Button>
          </div>
        </div>

      </div>
    )
  }
}

export default ToDoList;