import React, {Component} from 'react';
import DataCard from './DataCard';

export default class Pfgs extends Component {
  constructor(props){
    super(props)
    this.state = {pfgs: []}
  }

  componentWillMount(){
    fetch('/api/pfgs').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({pfgs: data});
    }).catch((err) => {
      console.log('fetch error: ', err);
    });
  }

  render(){
    let pfgs = this.state.pfgs.map((pfg, i) => {
      return (
        <div key={i}>
          <DataCard data={pfg} />
        </div>
      )
    })
    return(
      <div className="ItemContainer">
        {pfgs}
      </div>
    )
  }
}
