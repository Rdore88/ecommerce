import React, {Component} from 'react';
import PfgCard from './PfgCard';

export default class Pfgs extends Component {
  constructor(props){
    super(props)
    this.state = {pfgs: []}
  }

  componentDidMount(){
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
          <PfgCard pfg={pfg} />
        </div>
      )
    })
    return(
      <div className="PfgContainer">
        {pfgs}
      </div>
    )
  }
}
