import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import MainPage from './main/main';
import Footer from './footer/footer';
import About from './about/about';
import Contact from './contact/contact';
import Solutions from './solutions/solutions';
import Circuits from './circuits/circuits';

export default (props) => (
  <div className='app-container'>
    <Nav/>

    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/lighting" component={Solutions}/>
      <Route exact path="/circuits" component={Circuits}/>

      <Route path="*" component={null}/>

    </Switch>


    <Footer/>
  </div>
);
