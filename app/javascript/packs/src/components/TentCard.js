import React, {Component} from 'react';

export default class TentCard extends Component {
  render(){
    let tent = this.props.tent

    return(
      <div className="Tentcard">
        <h2>{tent.name}</h2>
        <h2>{tent.price}</h2>
        <h2>{tent.quantity}</h2>
        <h2>{tent.description}</h2>
      </div>
    )
  }
}
