import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { updateEmailAction, updatePasswordAction, restartStateAction } from '../../duck/authReducer'
import './setting.scss'

class Settings extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleSetUserInfo = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmitInfo = (e, payload) => {
    let { email, username, password } = this.state
    e.preventDefault()

    if (email !== '' && payload === 'email') {
      let result = this.handleCheckEmail(email)
      if (result) {
        let data = {
          id: this.props.userID,
          newEmail: this.state.email
        }
        this.props.updateEmailAction(data)
        this.handleResetState()
      } else {
        alert('Please check your Email')
      }
    }

    if (password !== '' && payload === 'password') {
      let result = this.handleCheckPasswordLength(password)
      if (result) {
        let data = {
          id: this.props.userID,
          newEmail: password
        }
        console.log('truee')
        this.props.updatePasswordAction(data)
        // this.handleResetState()
      } else {
        console.log('falssse')
        alert('Please check your password')
      }
    }

    // if (this.state.password !== '' && payload === 'password') {
    //   let data = {
    //     id: this.props.userID,
    //     newPassword: this.state.password
    //   }
    //   this.props.updatePasswordAction(data)
    //   this.setState({ password: '' })
    // } else {
    //   console.log(false, 'password')
    // }

    // if (this.state.username !== '' && payload === 'username') {
    //   console.log(true, 'username')
    // } else {
    //   console.log(false, 'username')
    // }
  }

  handleResetState() {
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  handleCheckEmail(passValue) {
    let str = passValue
    return str.includes('@') ? true : false
  }

  handleCheckPasswordLength(passValue) {
    let str = passValue
    return str.length >= 6 ? true : false
  }

  testing() {
    alert('message sucess save ew change in db')
    this.props.restartStateAction()
  }

  render() {
    // console.log(this.props)
    let displayMessage = this.props.successBool ? this.testing() : 'message failing'

    let isAuthForSetting = this.props.authBool ? (
      <div>
        this area for auth setting.
        <h3>create few input field and submit button</h3>
        <h2>add handle on submit to check if user is login in then save it</h2>
        <p>Email: {this.props.userEmail} </p>
        <input
          value={this.state.email}
          type="email"
          name="email"
          placeholder="enter new email..."
          onChange={this.handleSetUserInfo}
        />
        <button onClick={() => this.handleSubmitInfo('email')}>Submit email</button>
        {/* <input type="submit"/> */}
        {displayMessage}
        <p>username: {this.props.username}</p>
        <input
          value={this.state.username}
          type="username"
          name="username"
          placeholder="enter new username..."
          onChange={this.handleSetUserInfo}
        />
        <button onClick={() => this.handleSubmitInfo('username')}>Submit username</button>
        <p>password:</p>
        <input
          value={this.state.password}
          type="password"
          name="password"
          placeholder="enter new password..."
          onChange={this.handleSetUserInfo}
        />
        <button onClick={() => this.handleSubmitInfo('password')}>Submit password</button>
      </div>
    ) : (
      <div className="setting_container">
        <div>
          this area for non-auth setting.
          <h3>create few input field and submit button</h3>
          <h2>add handle on submit to check if user is login in then save it</h2>
        </div>

        <form className="setting_form_container">
          <div>
            <p>Email: {this.props.userEmail}</p>
            <input type="email" name="email" placeholder="enter new email..." onChange={this.handleSetUserInfo} />
            <button onClick={(e) => this.handleSubmitInfo(e, 'email')}>Submit email</button>
          </div>

          <div>
            <p>username: {this.props.username}</p>
            <input
              type="username"
              name="username"
              placeholder="enter new username..."
              onChange={this.handleSetUserInfo}
            />
            <button onClick={(e) => this.handleSubmitInfo(e, 'username')}>Submit username</button>
          </div>

          <div>
            <p>password:</p>
            <input
              type="password"
              name="password"
              placeholder="enter new password..."
              onChange={this.handleSetUserInfo}
            />
            <button onClick={(e) => this.handleSubmitInfo(e, 'password')}>Submit password</button>
          </div>
        </form>
      </div>
    )

    return <Fragment>{isAuthForSetting}</Fragment>
  }
}

const mapPropToState = (state) => {
  return state.auth
}

export default connect(mapPropToState, { updateEmailAction, updatePasswordAction, restartStateAction })(Settings)
