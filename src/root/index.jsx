import React, { Component } from 'react';
import { Parent } from '../components/Parent';

class Root extends Component {
  render() {
    return (
      <div>
        <Parent />
      </div>
    );
  }
}

export default Root;