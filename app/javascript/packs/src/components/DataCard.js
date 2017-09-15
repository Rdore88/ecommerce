import React, {Component} from 'react';

export default class DataCard extends Component {
  render(){
    let data = this.props.data

    return(
      <div className="card">
        <h2>{data.name}</h2>
        <h2>{data.price}</h2>
        <h2>{data.quantity}</h2>
        <h2>{data.description}</h2>
      </div>
    )
  }
}
