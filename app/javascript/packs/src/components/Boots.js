import React, {Component} from 'react';
import DataCard from './DataCard';

export default class Boots extends Component {
  constructor(props){
    super(props)

    this.state = {boots: []}
  }

  componentWillMount(){
    fetch('/api/boots').then((response)=> {
      return response.json()
    }).then((data) => {
      console.log(data);
      this.setState({boots: data});
    }).catch((err)=>{
      console.log('fetch error: ', err)
    });
  }
  render(){
    let boots = this.state.boots.map((boot, i) => {
      return (
        <div key={i}>
          <DataCard data={boot} />
        </div>
      )
    })
    return(
      <div className="ItemContainer">
        {boots}
      </div>
    )
  }
}
