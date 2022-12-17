import React, {Component} from "react";

import {Button} from '../Button/index'

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: 'Webbrain',
            username: '',
            data: [
                {id: 1, title: 'Something here'},
                {id: 2, title: 'CSS'},
                {id: 3, title: 'HTML'},
                {id: 4, title: 'JS'},
            ]
        }
    }

    render() {

        const increment = () => {
            if(this.state.count <5) {
                this.setState({count: this.state.count + 1, title: 'Academy'})
            }
        }

        const decrement = () => {
            if(this.state.count > 0) {
                this.setState({count: this.state.count - 1, title: 'Webbrain'})
            }
        }

        const onChange  = (event) => {
            this.setState({username: event.target.value})
            
        }

        const selectItem = (e) => {
            console.log(e.target.value, 'select')
        }

        const onCheck = (e) => {
            console.log(e.target.checked)
        }

        

        return(
            <div>
                <h1>Products: {this.state.count}</h1>
                <h2>Title: {this.state.title}</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <p>==========================================================</p>
                <h4>Username: {this.state.username}</h4>
                <input type="text" placeholder="username" onChange={onChange} />
                <select onChange={selectItem}>
                    <option value="uzb">UZB</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                <input type="checkbox" onChange={onCheck} />
                {
                    this.state.data.map((value) => {
                        return (
                            <div>
                                <Button>{value.title}</Button> <button>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default State