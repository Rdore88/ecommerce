import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../logo.svg';
import '../styles/NavBar.css'

export default class NavBar extends Component {
  render(){
    return (
      <nav className="Navbar">
        <NavLink activeClassName="selected" className="navlink" to="/">Home</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/aboutus">About Us</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/contactform">Contact Form</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/tents">Tents</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/boots">Hiking Boots</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/pfgs">PFGs</NavLink>
      </nav>
    )
  }
}
