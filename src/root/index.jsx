import React, { Component } from 'react';
import { Body } from '../components';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';

class Root extends Component {
  render() {
    return (
      <div>
        <Body />
      </div>
    );
  }
}

export default Root;