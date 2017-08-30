import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Footer from './Footer';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
