import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { setSelect, setPrice, setBoth } from '../../duck/crmReducer'

class Tasks extends Component {
  state = { 
    price: 0,
    selectItem: ['', 'Drink', 'Food', 'Gas', 'Book', 'Etc'],
    item: ''
  }

  handleUserInput = (payload) => {
    // console.log('payload.target.name', payload.target.name, 'payload.target.value =', payload.target.value)
    this.setState({ [payload.target.name]: payload.target.value })
    this.props.setBoth(payload.target.name, payload.target.value)
  }

  handleAction = () => {
    this.props.setSelect(this.state.item)
    this.props.setPrice(this.state.price)
  }
  
  render() {
    let displaySelectItem = this.props.selectItem.map((value) => (
        <option value={ value } key={value}>{ value }</option>
    ))

    // console.log('this.props = ', this.props)
    return ( 
      <div>
        Task components
        <p>* Input some data </p>
        <p>* Show data in pie or bar grapic </p>
        <p>* save data in database</p>
        <p>* login /signup to view owner data</p>
        <input  type="number" 
                placeholder="Enter Price" 
                name="price"
                onChange={ (e) => this.handleUserInput(e) }>
        </input>
        <select name="item" onChange={ (e) => this.handleUserInput(e) }>
          { displaySelectItem }
        </select>

        <button onClick={ this.handleAction }>Sumit</button>
      </div>
     )
  }
}

function mapPropToState(state) {
  return state
}

// props type
Tasks.propTypes = {
  selectItem: PropTypes.array.isRequired,
  price: PropTypes.any,
  item: PropTypes.string.isRequired
}

export default connect(mapPropToState, { setSelect, setPrice, setBoth })(Tasks)