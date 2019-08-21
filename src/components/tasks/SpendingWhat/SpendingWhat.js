import React from 'react'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { setSpendItem, setSpendPrice, setResetState, setPurchaseDate, postToDB } from '../../../duck/spendReducer'
import './spendingWhat.scss'

function SpendingWhat(props) {

  const handlePassValueToReducer = (e) => {
    if (e.target.name === 'price') {
      return props.setSpendPrice(parseInt(e.target.value))
    }

    if (e.target.name === 'item') {
      return props.setSpendItem(e.target.value)
    }

    if (e.target.name === 'purchaseDate') {
      return props.setPurchaseDate(e.target.value)
    }

    return null
  }

  const handleSaveToDB = () => {
    // console.log(props);
    if (props.spend.price !== '' && props.spend.item !== '' && props.spend.purchaseDate !== '') {
      if (props.auth.userID !== '0' && props.auth.authBool === true) {
        console.log('true user login in save this data')
        handlePostToDB()
      } else {
        // console.log('false user not login to save this data')
        alert('Please login in to save your data')
        props.setResetState()
      }
    } else {
      // console.log(false)
      alert('Please fill in your infomation')
    }
  }

  const handlePostToDB = () => {
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
    .catch((err) => console.log("%c Unable to post to db at handlePostToDB()!", "color: red; font-size:1rem;", err))
  }

  const displaySelectItem = props.spend.selectItem.map((value) => (
    <option key={value}>{ value }</option>
  ))

  return (
    <div className="spendingWhat-container">
      <h1>SpendingWhat Components</h1>

      <div className="spendingWhat-form">
        <div>
          <h3>Type</h3>
          <select name="item" value={ props.spend.item } onChange={ handlePassValueToReducer }>
            { displaySelectItem }
          </select>
        </div>
        <div>
          <h3>Price</h3>
          <input  type="number"
                  name="price"
                  value={ props.spend.price }
                  placeholder="Enter Price..."
                  onChange={ handlePassValueToReducer }
          />
        </div>
        <div>
          <h3>Date</h3>
          <input  type="date"
                  name="purchaseDate"
                  value={ props.spend.purchaseDate }
                  placeholder="Enter Date..."
                  onChange={ handlePassValueToReducer }
          />
        </div>
        <button className="submit" onClick={ handleSaveToDB }>Submit</button>
      </div>

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