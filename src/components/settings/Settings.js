import React, { Component } from 'react'
// import Navbar from '../navbar/Navbar'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, restartState } from '../../duck/authReducer'

class Settings extends Component {
  state = { 
    username: '',
    email: '',
    password: ''
  }

  handleSetUserInfo = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmitInfo = (payload) => {
    console.log('payload', payload)
    if(this.state.email !== '' && payload === 'email') {
      let data = {
        id: this.props.userID,
        newEmail: this.state.email
      }
      console.log(true, 'email')
      this.props.updateEmail(data)
      this.setState({ email: '' })


    } else {
      console.log(false, 'email')
    }

    if(this.state.password !== '' && payload === 'password') {
      console.log(true, 'password')
      let data = {
        id: this.props.userID,
        newPassword: this.state.password
      }
      // console.log(true, 'email')
      this.props.updatePassword(data)
      this.setState({ password: '' })

    } else {
      console.log(false, 'password')
    }

    if(this.state.username !== '' && payload === 'username') {
      console.log(true, 'username')
    } else {
      console.log(false, 'username')
    }

  }

  testing() {
    alert('message sucess save ew change in db')
    this.props.restartState()
  }

  render() {
    console.log(this.props)
    let displayMessage = this.props.successBool ? this.testing() : 'message failing'


    let isAuthForSetting = this.props.authBool ? (
      <div>
        this area for auth setting.
        <h3>create few input field and submit button</h3>
        <h2>add handle on submit to check if user is login in then save it</h2>
        
        <p>Email: { this.props.userEmail } </p>
        <input value={ this.state.email } type="email" name="email"  placeholder="enter new email..." onChange={ this.handleSetUserInfo }/>
        <button onClick={ () => this.handleSubmitInfo('email') }>Submit email</button>
        {/* <input type="submit"/> */}
        { displayMessage }
        <p>username: { this.props.username }</p>
        <input value={ this.state.username } type="username" name="username" placeholder="enter new username..." onChange={ this.handleSetUserInfo }/>
        <button onClick={ () => this.handleSubmitInfo('username') }>Submit username</button>

        <p>password:</p>
        <input value={ this.state.password } type="password" name="password" placeholder="enter new password..." onChange={ this.handleSetUserInfo }/>
        <button onClick={ () => this.handleSubmitInfo('password') }>Submit password</button>
      </div>
    ) : (
      <div>
        this area for non-auth setting.
        <h3>create few input field and submit button</h3>
        <h2>add handle on submit to check if user is login in then save it</h2>

        <p>Email: { this.props.userEmail } </p>
        <input type="email" name="email" placeholder="enter new email..." onChange={ this.handleSetUserInfo }/>
        <button onClick={ () => this.handleSubmitInfo('email') }>Submit email</button>

        <p>username: { this.props.username }</p>
        <input type="username" name="username" placeholder="enter new username..." onChange={ this.handleSetUserInfo }/>
        <button onClick={ () => this.handleSubmitInfo('username') }>Submit username</button>

        <p>password:</p>
        <input type="password" name="password" placeholder="enter new password..." onChange={ this.handleSetUserInfo }/>
        <button onClick={ () => this.handleSubmitInfo('password') }>Submit password</button>
      </div>
    )


    return (
      <div>
        Settings
        <br/>
        { isAuthForSetting }
      </div>
    )
  }
}

const mapPropToState = (state) => {
  return state.auth
}

export default connect(mapPropToState, { updateEmail, updatePassword, restartState })(Settings)