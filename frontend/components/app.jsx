import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import Nav from './nav/nav';




export default (props) => (
  <div className='app-container'>
    <Nav />
    
    <Switch>
      <AuthRoute exact path='/' component={null} />

      <Route path="*" component={null}/>

    </Switch>



  </div>
);
