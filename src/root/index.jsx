import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Navbar } from '../components/Navbar';
import { navbar } from '../utils/navbar';

class Root extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<Navigate to='/home' />} />
            {
              navbar.map((value) => (
                <Route key={value.id} path={value.path} element={value.element} />
              ))
            }
          </Route>
            <Route path='*' element={<h1>404 NotFound</h1>} />
        </Routes>
      </div>
    );
  }
}

export default Root;