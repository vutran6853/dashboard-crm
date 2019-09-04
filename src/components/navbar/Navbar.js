import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.scss'

class Navbar extends Component {
  state = {
    navbarItem: ['Dashboard', 'Tasks', 'Email', 'Contacts', 'Chat', 'Deals', 'Settings', 'Login']
  }

  render() {
    let displayItem = this.state.navbarItem.map((value) => {
      return (
        <div className="navbar-item" key={value}>
          <Link to={ `/${value}` }>
            <p>{ value }</p>
          </Link>
        </div>
      )
    })

    let displayUserInfo = this.props.authBool ? (
      <p>Welcome { this.props.username }</p>
    ) : 'no'

    return (
      <div className="navbar-container">
        { displayUserInfo }
        { displayItem }
      </div>
    )
  }
}

const mapPropToState = (state) => {
  return state.auth
}

export default connect(mapPropToState, {})(Navbar)