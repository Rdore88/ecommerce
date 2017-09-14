import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../logo.svg';
import '../styles/NavBar.css'

export default class NavBar extends Component {
  constructor(props){
    super(props)

    this.state = {username: this.props.username, admin: this.props.admin}
  }
  render(){
    let changeNavBar;
    if (!this.state.username) {
      changeNavBar =
      <div>
        <NavLink activeClassName="selected" className="navlink" to="/signup">Sign Up</NavLink>
        <NavLink activeClassName="selected" className="navlink" to="/login">Login</NavLink>
      </div>
    } else {
      changeNavBar =
      <div>
        <NavLink activeClassName="selected" className="navlink" to="/logout">Log Out</NavLink>
      </div>
    }
    return (
      <nav className="upperNavbar">
        <div className="navs">
          <NavLink activeClassName="selected" className="navlink" to="/">Home</NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/aboutus">About Us</NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/contactform">Contact Form</NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/tents">Tents</NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/boots">Hiking Boots</NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/pfgs">PFGs</NavLink>
        </div>
          {changeNavBar}
      </nav>
    )
  }
}
