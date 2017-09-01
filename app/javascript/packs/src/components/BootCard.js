import React, {Component} from 'react';

export default class BootCard extends Component {
  render(){
    let boot = this.props.boot

    return(
      <div className="Bootcard">
        <h2>{boot.name}</h2>
        <h2>{boot.price}</h2>
        <h2>{boot.quantity}</h2>
        <h2>{boot.description}</h2>
      </div>
    )
  }
}
