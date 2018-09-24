import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  //setTimeout(() => {
  //  props.history.push('/about');
  //}, 2000);
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a className="brand-logo" >Poke Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
