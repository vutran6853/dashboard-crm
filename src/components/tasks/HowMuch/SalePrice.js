import React from 'react'
import { connect } from 'react-redux'
import PropTypes  from 'prop-types'
import { setPrice, setItem, setSale, setTotal, setSaleDiscount } from '../../../duck/taskReducer'

import Result from './result'

function SalePrice(props) {
  const setPriceToReducer = (e) => {
    return props.setPrice(parseInt(e.target.value))
  }

  const setSaleToReducer = (e) => {
  return props.setSale(parseInt(e.target.value))
  }

  const setTotalToReducer = () => {
    let price = props.price
    let discount =  (props.sale / 100)
    let saleDiscount = (discount * price)
    let total = price - saleDiscount
    props.setSaleDiscount(saleDiscount)
    props.setTotal(total)
  }
  
  const displayResult = props.total !== '' ? <Result /> : ''

  return (
    <div>
      SalePrice Components

      <input  type="number"
              placeholder="Enter Price"
              name="price"
              value={ props.price }
              onChange={ setPriceToReducer }>
      </input>

      <input  type="number"
              placeholder="Enter discount"
              name="discount"
              value={ props.discount }
              onChange={ setSaleToReducer }>
      </input>

  
      <button onClick={ setTotalToReducer }>Sumit</button>

      { displayResult }
    </div>
  )
}

// Map Props From Reducer To Component
const mapPropToState = (state) => {
  return state.task
}

// Props Type
SalePrice.propTypes = {
  price: PropTypes.number,
  discount: PropTypes.number,
  saleDiscount: PropTypes.number
}

export default connect(mapPropToState, { setPrice, setItem, setSale, setTotal, setSaleDiscount }) (SalePrice)

