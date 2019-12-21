import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './navbar.scss'

class Navbar extends Component {
  state = {
    navbarItem: ['Dashboard', 'Tasks', 'Email', 'Contacts', 'Chat', 'Weather', 'Settings', 'Login']
  }

  render() {
    let displayItem = this.state.navbarItem.map((value) => {
      return (
        <div className="navbar_item" key={value}>
          <button>
            <Link to={`/${value}`}>
              <p>{value}</p>
            </Link>
          </button>
        </div>
      )
    })

    let displayUserInfo = this.props.authBool ? <p>Welcome {this.props.username}</p> : 'no'
    return (
      <div className="navbar_container">
        <div className="navbar_side_panel">
          {displayUserInfo}
          {displayItem}
        </div>
      </div>
    )
  }
}

const mapPropToState = (state) => {
  return state.auth
}

export default connect(mapPropToState, {})(Navbar)
