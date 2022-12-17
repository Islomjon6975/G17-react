import React, { Component } from 'react';

class MultiStateChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  }
  render() {
    const onChange = (e) => {
      console.log(e.target.value, e.target.name)
      this.setState({[e.target.name]: e.target.value})
    }

    

    console.log(this.state)
    return (
      <div>
        <input name="name" onChange={onChange} type="text" placeholder='Name' />
        <input name="username" onChange={onChange} type="text" placeholder='Username' />
        <input name="email" onChange={onChange} type="email" placeholder='Email' />
        <input name="password" onChange={onChange} type="password" placeholder='Password' />
        <h3>Name: {this.state.name}</h3>
        <h3>Username: {this.state.username}</h3>
        <h3>Email: {this.state.email}</h3>
        <h3>password: {this.state.password}</h3>
      </div>
    );
  }
}

export default MultiStateChange;