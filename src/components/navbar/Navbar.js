import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {
  state = { 
    navbarItem: ['Dashboard', 'Tasks', 'Email', 'Contacts', 'Chat', 'Deals', 'Settings', 'Login']
  }


  lowerFirstChar(passValue) {
    console.log('passValue =', passValue)
  }

  render() {
    let displayItem = this.state.navbarItem.map((value, index) => {
      return (
        <div className="navbar-item" key={value}>
          <Link to={ `/${value}` }>
            <p>{ value }</p>
          </Link>
        </div>
      )
    })

    return (
      <div className="navbar-container">
        Navbar Components
        <div>
          { displayItem }
        </div>
      </div>
    )
  }
}

export default Navbar