import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/Navbar/index.';
import { NotFound } from '../components/NotFound';
import { navbar } from '../utils/navbar';
class Root extends Component {
  
  render() {
    // localStorage.setItem('token', 'user')
    return (
      <div>
        <Switch>
          {
            navbar.map((value) => {
              return  <Route key={value.id} path={value.path} exact component={Navbar} />
            })
          }
        </Switch>
        <Switch>
          {
            navbar.map((value) => {
              if(!value.isPrivate) {
                return <Route key={value.id} path={value.path} component={value.componenet}  />
              } else {
                return <Redirect key={value.id} to='/login' />
              }
            })
          }
          <Route path='*' >
            <NotFound /> 
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Root;