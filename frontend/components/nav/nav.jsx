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
          <img src="public/MikpowerLogo4.png"></img>

        </NavLink>
        <ul className="nav-buttons">
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/circuits" activeClassName="active">Integrated Circuits</NavLink>
          </li>
          <li>
            <NavLink to="/lighting" activeClassName="active">Lighting Solutions</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }


}

export default Nav;
