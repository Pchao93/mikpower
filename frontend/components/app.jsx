import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import MainPage from './main/main';
import Footer from './footer/footer';
import About from './about/about';

export default (props) => (
  <div className='app-container'>
    <Nav/>

    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/about" component={About}/>

      <Route path="*" component={null}/>

    </Switch>


    <Footer/>
  </div>
);
