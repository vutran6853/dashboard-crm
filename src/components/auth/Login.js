import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginIn } from '../../duck/authReducer'
import PropTypes from 'prop-types'

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
  
  handleLoginIn = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      let data = { 
        username: this.state.username, 
        password: this.state.password 
      }

      this.props.loginIn(data)
      this.setState({ username: '', password: '' })
      
    } else {

      console.log('false', false)
    }

  }

  handleRouterToSignUp = () => {
    console.log('hit')
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div>
        <p>Login back</p>
        <h3>username: </h3>
        <input  type="text" 
                value={ this.state.username } 
                name="username" 
                onChange={ this.handleSetUserInfo } 
                placeholder='Enter username'
        />
        <h3>Password: </h3>
        <input  type="password" 
                value={ this.state.password } 
                name="password" 
                onChange={ this.handleSetUserInfo } 
                placeholder='Enter password'
        />

        <button onClick={ this.handleLoginIn }>Submit</button>

        <button onClick={ this.handleRouterToSignUp } >Need account</button>
      </div>
     )
  }
}

// Type Checking
Login.propTypes = {
  loginIn: PropTypes.func
}

const mapPropToState = (state) => state

export default connect(mapPropToState, { loginIn })(Login)