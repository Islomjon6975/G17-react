import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''}
    console.log('constructor')

  }

  render() {
    const onChange = (e) => {
      console.log(e, 'event')
      this.setState({name: e.target.value})
    }
    
    console.log('render')
    return (
      <div>
        <h1 style={{color: 'black'}}>Name: {this.state.name}</h1>
        <input type="text" onChange={onChange}  />
      </div>
    );
  }
}

export default LifeCycle;