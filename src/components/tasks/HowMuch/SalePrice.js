import React from 'react'
import { connect } from 'react-redux'
import PropTypes  from 'prop-types'
import Result from './Result'
import { setPrice, setItem, setSale, setTotal, setSaleDiscount, restartState } from '../../../duck/taskReducer'

import './salePrice.scss'

function SalePrice(props) {

  const setValueToState = (e) => {
    // let obj = {
    //   [e.target.name]: parseInt(e.target.value)
    // }

    if (e.target.name === 'price') {
      props.setPrice(parseInt(e.target.value))
    }

    if (e.target.name === 'saleDiscount') {
      props.setSale(parseInt(e.target.value))
    }

    return null
  }

  const setTotalToReducer = () => {
    let price = props.price
    let discount =  (props.sale / 100)
    let saleDiscount = (discount * price)
    let total = price - saleDiscount
    props.setSaleDiscount(saleDiscount)
    props.setTotal(total)
  }

  const setRestartState = () => {
    if (props.total !== '') {
        props.restartState()
    }

    return null
  }

  const displayResult = props.total !== '' ? <Result /> : ''

  return (
    <div className="sale-price-container">
      <h1>How Much</h1>

      <div className="sale-price-form">
        <div className="sale-price-item">
          <p>Price</p>
          <input  type="number"
                  placeholder="Enter Price"
                  name="price"
                  value={ props.price }
                  onClick={ setRestartState }
                  onChange={ setValueToState }>
          </input>
        </div>

        <div className="sale-price-item">
          <p>Sale</p>
          <input  type="number"
                  placeholder="Enter discount"
                  name="saleDiscount"
                  value={ props.sale }
                  onClick={ setRestartState }
                  onChange={ setValueToState }>
          </input>
        </div>

        <button className="submit-button" onClick={ setTotalToReducer }>Sumit</button>
      </div>

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

export default connect(mapPropToState, { setPrice, setItem, setSale, setTotal, setSaleDiscount, restartState }) (SalePrice)

