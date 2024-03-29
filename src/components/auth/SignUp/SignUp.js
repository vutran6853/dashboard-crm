import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpAction } from '../../../duck/authReducer'
import './signup.scss'

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

  handleSignUp = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      let data = {
        username: this.state.username,
        password: this.state.password
      }

      this.props.signUpAction(data)
      this.setState({ username: '', password: '' })
    } else {
      console.log('false', false)
    }
  }

  hadnleRouterToLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <p className="auth-title">Sign Up</p>
          <div className="auth-input-container">
            <input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleSetUserInfo}
              placeholder="Enter username"
            />
            <input
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleSetUserInfo}
              placeholder="Enter password"
            />
          </div>
          <div className="button-container">
            <button onClick={this.hadnleRouterToLogin}>Already have account</button>
            <button onClick={this.handleSignUp}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapPropToState = (state) => state

export default connect(mapPropToState, { signUpAction })(Login)
