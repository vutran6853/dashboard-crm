import React, { Component } from 'react'
// import Navbar from '../navbar/Navbar'
// import PropTypes  from 'prop-types'
// import { connect } from 'react-redux'
// import { setSelect, setBoth } from '../../duck/crmReducer'
// import { setPrice, setItem } from '../../duck/taskReducer'
// import SalePrice from './howMuch/SalePrice'
// import Result from './howMuch/result'
// import SpendWhat from './SpendingWhat/SpendingWhat'
// import Grapic from './graphic/Grapic'
// import { Link } from 'react-router-dom'
import './tasks.css'

class Tasks extends Component {

  componentWillUnmount() {
    console.log('component will unmount from Task components')
  }

  handleRouteTo = (passValue) => {
    this.props.history.push(`/Tasks/${passValue}`)
  }

  render() {
    return (
      <div className="tasksContainer">
        <button onClick={ () => this.handleRouteTo('how_much') }>
          SalePrice
        </button>

        <button onClick={ () => this.handleRouteTo('spending_what') }>
          SpendWhat
        </button>

        <button onClick={ () => this.handleRouteTo('grapic') }>
          Grapic
        </button>
      </div>
    )
  }
}

export default Tasks