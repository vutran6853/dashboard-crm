import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginInAction } from '../../../duck/authReducer'
import PropTypes from 'prop-types'
import './login.scss'

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

      this.props.loginInAction(data)
      this.setState({ username: '', password: '' })
    } else {
      console.log('false', false)
    }
  }

  handleRouterToSignUp = () => {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-box">
          <p className="login-title">Sign in to start your session</p>
          <div className="login-input-container">
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
            <button onClick={this.handleRouterToSignUp}>Need account</button>
            <button onClick={this.handleLoginIn}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

// Type Checking
Login.propTypes = {
  loginInAction: PropTypes.func
}

const mapPropToState = (state) => state

export default connect(mapPropToState, { loginInAction })(Login)
