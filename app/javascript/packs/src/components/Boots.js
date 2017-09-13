import React, {Component} from 'react';
import BootCard from './BootCard';

export default class Boots extends Component {
  constructor(props){
    super(props)

    this.state = {boots: []}
  }

  componentDidMount(){
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
          <BootCard boot={boot} />
        </div>
      )
    })
    return(
      <div className="BootContainer">
        {boots}
      </div>
    )
  }
}
