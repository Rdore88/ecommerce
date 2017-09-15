import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class SignUp extends Component{
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }
  handleEmailChange(e){
    this.setState({email: e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value})
  }
  handlePasswordConfirmationChange(e){
    this.setState({password_confirmation: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    var payload = {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }
    }
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( (response) => {
      return response.json()
    })
      .then(
        (result) => {
          console.log(result.message);
          alert(result.message)
          // this.context.router.history.push('/');
      })
      .catch(err=>alert(err.message))
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} className='signup-form'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={this.handleNameChange} value={this.state.name} />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.email} />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={this.handlePasswordChange} />
        <label htmlFor="password_confirmation">Password Confirmation:</label>
        <input type="password" name="password_confirmation" onChange={this.handlePasswordConfirmationChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

SignUp.contextTypes = {
  router: React.PropTypes.object.isRequired
}
