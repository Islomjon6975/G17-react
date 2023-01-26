import React, { Component } from 'react';
import { Axios } from '../components/Axios';
import { Fetch } from '../components/Fetch';
import { Houzing } from '../components/Houzing';

class Root extends Component {
  render() {
    return (
      <div>
        <Houzing />
      </div>
    );
  }
}

export default Root;