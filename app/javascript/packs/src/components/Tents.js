import React, {Component} from 'react';
import TentCard from './TentCard'

export default class Tents extends Component {
  constructor(props){
    super(props)

    this.state = {tents: []}
  }

  componentDidMount(){
    fetch('/tents').then((response) => {
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
          <TentCard tent={tent} />
        </div>
      )
    })
    return(
      <div className="TentContainer">
        {tents}
      </div>
    )
  }
}
