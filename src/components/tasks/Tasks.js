import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { setSelect, setBoth } from '../../duck/crmReducer'
import { setPrice, setItem } from '../../duck/taskReducer'
import SalePrice from './HowMuch/SalePrice'
import Result from './HowMuch/result'
import SpendWhat from './SpendingWhat/SpendingWhat'

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      price: 0
    }
  }

  componentWillUnmount() {
    console.log('component will unmount from Task components')
  }


  render() {
    return (
      <div>
        Task components
        <p>* Input some data </p>
        <p>* Show data in pie or bar grapic </p>
        <p>* save data in database</p>
        <p>* login /signup to view owner data</p>
        <SalePrice />
        <SpendWhat />
      </div>
    )
  }
}

export default Tasks