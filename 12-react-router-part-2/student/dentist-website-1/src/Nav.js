import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div>
        <NavLink exact activeClassName="selected" to="/"> Go To Home Page </NavLink>{' '}
        <NavLink to="/about" activeClassName="selected" > About Us </NavLink> {' '}
        <NavLink to="/contact" activeClassName="selected"> Contact Us! </NavLink>
      </div>
    );
  }
}
export default Nav;
