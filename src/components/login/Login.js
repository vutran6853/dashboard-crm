import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sigin } from '../../duck/loginReducer'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      username: '',
      password: ''
     }
  }

  handleSetUserInfo = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      let data = { 
        username: this.state.username, 
        password: this.state.password 
      }

      this.props.sigin(data)

    } else {

      console.log('false', false)
    }

  }

  render() {
    return (
      <div>
        <p>Login</p>
        <h3>username: </h3>
        <input type="text" name="username" onChange={ this.handleSetUserInfo } placeholder='Enter username'/>

        <h3>Password: </h3>
        <input type="password" name="password" onChange={ this.handleSetUserInfo } placeholder='Enter password'/>

        <button onClick={ this.handleSubmit }>Submit</button>
      </div>
     )
  }
}

const mapPropToState = (state) => state

export default connect(mapPropToState, { sigin }) (Login)