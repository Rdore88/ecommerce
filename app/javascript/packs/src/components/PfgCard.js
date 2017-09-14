import React, {Component} from 'react';

export default class PfgCard extends Component {
  render(){
    let pfg = this.props.pfg

    return(
      <div className="card">
        <h2>{pfg.name}</h2>
        <h2>{pfg.price}</h2>
        <h2>{pfg.quantity}</h2>
        <h2>{pfg.description}</h2>
      </div>
    )
  }
}
