import React, { Component } from 'react';
import ClassComponents from '../components/ClassComponents';
import FunctionalComponents from '../components/FunctionalComponents';

class Root extends Component {
  render() {
    return (
      <div>
        <ClassComponents />
        <hr />
        <FunctionalComponents />
      </div>
    );
  }
}

export default Root;