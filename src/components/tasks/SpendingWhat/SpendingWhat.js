import React from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { setSpendItem, setSpendPrice, setResetState, setPurchaseDate, postToDB } from '../../../duck/spendReducer'

function SpendingWhat(props) {
  const displaySelectItem = props.spend.selectItem.map((value) => (
    <option key={value}>{ value }</option>
  ))

  const setItemToReducer = (e) => {
    return props.setSpendItem(e.target.value)
  }

  const setPurchaseDateToReducer = (e) => {
    return props.setPurchaseDate(e.target.value)
  }

  const setPriceToReducer = (e) => {
    return props.setSpendPrice(parseInt(e.target.value))
  }

  const saveToDB = () => {
    console.log(props);
    if (props.spend.price !== '' && props.spend.item !== '' && props.spend.purchaseDate !== '') {
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
      price: props.spend.price,
      purchaseDate: props.spend.purchaseDate
    }

    props.postToDB(data)
    .then((response) => {
      console.log('response', response)
      if (response.value.data.length === 0) {
        alert('Success save to DB')
      }
      props.setResetState()
    })
    .catch((err) => console.error('Unable to save to DB. Try again ', err))
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
              onChange={ setPriceToReducer }
      />
      <input  type="date"
              name="purchaseDate"
              value={ props.spend.purchaseDate }
              placeholder="Enter Date..."
              onChange={ setPurchaseDateToReducer }
      />

      <button onClick={ saveToDB }>Submit</button>

      <br/>
      <p>To see your data in graphic Go to Task -> under graphic</p>
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

export default connect(mapPropToState, { setSpendItem, setSpendPrice, setPurchaseDate, setResetState, postToDB })(SpendingWhat)