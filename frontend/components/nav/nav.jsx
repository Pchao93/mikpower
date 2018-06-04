import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className="nav">
        <NavLink exact to="/" activeClassName="active"
          className="logo">
          <img src="https://i.imgur.com/NO4rEmO.png"></img>

        </NavLink>
        <ul className="nav-buttons">

            <NavLink to="/about" activeClassName="active">About</NavLink>


            <NavLink to="/circuits" activeClassName="active">Integrated Circuits</NavLink>


            <NavLink to="/lighting" activeClassName="active">Lighting Solutions</NavLink>


            <NavLink to="/contact" activeClassName="active">Contact</NavLink>

        </ul>
      </nav>
    );
  }


}

export default Nav;
