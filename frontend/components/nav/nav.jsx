import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <nav className="nav">
        <img
          className="logo"
          src="public/MikpowerLogo.png">

        </img>
        <ul className="nav-buttons">
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/company" activeClassName="active">Company</NavLink>
          </li>
          <li>
            <NavLink to="/circuits" activeClassName="active">Integrated Circuits</NavLink>
          </li>
          <li>
            <NavLink to="/lighting" activeClassName="active">Lighting Solutions</NavLink>
          </li>
          <li>
            <NavLink to="/support" activeClassName="active">Support</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }


}
