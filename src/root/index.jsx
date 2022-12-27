import React, { Component } from 'react';
import LifeCycle from '../components/LifeCycle';

class Root extends Component {
  render() {
    return (
      <div>
        Root
        <LifeCycle />
      </div>
    );
  }
}

export default Root;