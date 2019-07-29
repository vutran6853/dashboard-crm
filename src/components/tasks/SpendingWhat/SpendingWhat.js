import React, { useState, useDebugValue } from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { setSpendItem, setSpendPrice, setResetState, postToDB } from '../../../duck/spendReducer'

function SpendingWhat(props) {
  const displaySelectItem = props.spend.selectItem.map((value) => (
    <option  key={value}>{ value }</option>
  ))

  const setItemToReducer = (e) => {
    return props.setSpendItem(e.target.value)
  }

  const setPriceToReducer = (e) => {
    return props.setSpendPrice(parseInt(e.target.value))
  }

  const saveToDB = () => {
    console.log(props);
    if (props.spend.price !== '' && props.spend.item !== '') {
      if (props.auth.userID !== '') {
        console.log('true user login in save this data')
        postToDB()
      } else {
        console.log('false user not login to save this data')
        // alert('Please login in to save your data')
        props.setResetState()
      }
    } else {
      console.log(false)
      alert('Please fill in your infomation')
    }
  }

  const postToDB = () => {
    let data = {
      id: props.auth.userID,
      item: props.spend.item,
      price: props.spend.price
    }
    props.postToDB(data)
  }


  return (
    <div>
      SpendingWhat Components
      <select name="item" value={ props.spend.item } onChange={ setItemToReducer }>
          { displaySelectItem }
      </select>
      <input  type="number"
              name="price"
              value={ props.spend.price }
              placeholder="Enter Price..."
              onChange={ setPriceToReducer }/>
      <button onClick={ saveToDB }>Submit</button>
    </div>
  )
}

// Map Props From Reducer To Component
const mapPropToState = (state) => {
  return {
    spend: state.spend,
    auth: state.auth
  }
}

// Props Type
SpendingWhat.propTypes = {
  spend: PropTypes.shape({
    selectItem: PropTypes.arrayOf(PropTypes.string),
    item: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  auth: PropTypes.object.isRequired,
  setResetState: PropTypes.func.isRequired
}

export default connect(mapPropToState, { setSpendItem, setSpendPrice, setResetState, postToDB })(SpendingWhat)