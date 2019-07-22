import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { setSelect, setPrice, setBoth } from '../../duck/crmReducer'

function Tasks(props) {
 const handleUserInput = (e) => {
    // console.log('e.target.name', e.target.name, 'e.target.value =', e.target.value)
    // this.setState({ [e.target.name]: e.target.value })
    props.setBoth(e.target.name, e.target.value)
  }

  const handleAction = () => {
    // this.props.setSelect(this.state.item)
    // this.props.setPrice(this.state.price)
  }

  let displaySelectItem = props.selectItem.map((value) => (
    <option value={ value } key={value}>{ value }</option>
  ))

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
              onChange={ handleUserInput }>
      </input>
      <select name="item" onChange={ handleUserInput }>
        { displaySelectItem }
      </select>

      <button onClick={ handleAction }>Sumit</button>
    </div>
  )
}

// map props from reducer to component
function mapPropToState(state) {
  return state.crm
}

// props type
Tasks.propTypes = {
  selectItem: PropTypes.array.isRequired,
  price: PropTypes.any,
  item: PropTypes.string.isRequired
}

export default connect(mapPropToState, { setSelect, setPrice, setBoth })(Tasks)