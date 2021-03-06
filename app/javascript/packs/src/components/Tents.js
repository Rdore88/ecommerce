import React, {Component} from 'react';
import DataCard from './DataCard'

export default class Tents extends Component {
  constructor(props){
    super(props)

    this.state = {tents: []}
  }

  componentWillMount(){
    fetch('/api/tents').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({tents: data});
    }).catch((err) => {
      console.log('fetch error: ', err);
    });
  }

  render(){
    let tents = this.state.tents.map((tent, i) => {
      return (
        <div key={i}>
          <DataCard data={tent} />
        </div>
      )
    })
    return(
      <div className="ItemContainer">
        {tents}
      </div>
    )
  }
}
