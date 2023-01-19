import React, { Component } from 'react';
import { Axios } from '../components/Axios';
import { Fetch } from '../components/Fetch';

class Root extends Component {
  render() {
    return (
      <div>
        <Fetch />
        <Axios />
      </div>
    );
  }
}

export default Root;