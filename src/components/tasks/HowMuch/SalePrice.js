// @flow
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Result from './Result'
import {
  setPriceAction,
  setItemAction,
  setSaleAction,
  setTotalAction,
  setSaleDiscountAction,
  restartStateAction
} from '../../../duck/taskReducer'
import './salePrice.scss'

function SalePrice(props) {
  // console.log('props', props)
  const handleValueToState = (e) => {
    // let obj = {
    //   [e.target.name]: parseInt(e.target.value)
    // }

    if (e.target.name === 'price') {
      props.setPriceAction(e.target.value)
    }

    if (e.target.name === 'saleDiscount') {
      props.setSaleAction(e.target.value)
    }

    return null
  }

  const handleSendTotalToReducer = () => {
    let price = props.price
    let discount = props.sale / 100
    let saleDiscount = discount * price
    let total = price - saleDiscount
    props.setSaleDiscountAction(saleDiscount.toString())
    props.setTotalAction(total)
  }

  const handleRestartState = () => {
    if (props.total !== '') {
      props.restartStateAction()
    }

    return null
  }

  const isTotalShowResult = props.total !== '' ? <Result /> : ''

  return (
    <div className="sale-price-container">
      <h1>How Much</h1>

      <div className="sale-price-form">
        <div className="sale-price-item">
          <p>Price</p>
          <input
            type="number"
            placeholder="Enter Price"
            name="price"
            value={props.price}
            onClick={handleRestartState}
            onChange={handleValueToState}></input>
        </div>

        <div className="sale-price-item">
          <p>Sale</p>
          <input
            type="number"
            placeholder="Enter discount"
            name="saleDiscount"
            value={props.sale}
            onClick={handleRestartState}
            onChange={handleValueToState}></input>
        </div>

        <button className="submit-button" onClick={handleSendTotalToReducer}>
          Sumit
        </button>
      </div>

      {isTotalShowResult}
    </div>
  )
}

// Map Props From Reducer To Component
const mapPropToState = (state) => state.task

// Props Type
SalePrice.propTypes = {
  price: PropTypes.string.isRequired,
  // discount: PropTypes.string.isRequired,
  saleDiscount: PropTypes.string.isRequired
}

export default connect(mapPropToState, {
  setPriceAction,
  setItemAction,
  setSaleAction,
  setTotalAction,
  setSaleDiscountAction,
  restartStateAction
})(SalePrice)
