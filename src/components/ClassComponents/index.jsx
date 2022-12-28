import React, { Component } from 'react'

class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {

    const plus = () => {
      this.setState({count: this.state.count + 1})
    }

    const minus = () => {
      this.setState({count: this.state.count - 1})
    }

    return (
      <div>
        <h1>ClassComponents: {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    )
  }
}

export default ClassComponents