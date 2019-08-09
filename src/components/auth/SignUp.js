import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../duck/authReducer'
import './auth.css'

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

      this.props.signUp(data)
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
      <div className="authContainer">
        <div className="authBox">
          <p className="authTitle">Sign Up</p>
          <div className="authInputField">
            <input  type="text"
                    value={ this.state.username } 
                    name="username"
                    onChange={ this.handleSetUserInfo } 
                    placeholder='Enter username'>
            </input>
            <input  type="password"
                    value={ this.state.password } 
                    name="password"
                    onChange={ this.handleSetUserInfo } 
                    placeholder='Enter password'>
            </input>
          </div>
          <div className="authButtonArea">
            <button onClick={ this.handleSignUp }>Submit</button>
            <button onClick={ this.hadnleRouterToLogin }>Already have account</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapPropToState = (state) => state

export default connect(mapPropToState, { signUp })(Login)