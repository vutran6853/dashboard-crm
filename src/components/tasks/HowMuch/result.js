import React from 'react'
import { connect } from 'react-redux'

function Result(props) {
  console.log(props)
  return (
    <div className="result-container">
      <h3>Price: ${ props.price }</h3>
      <h3>Discount: ${ props.saleDiscount } off</h3>
      <h3>Total: ${ props.total }</h3>
    </div>
  )
}

// map props from reducer to component
const mapPropToState = function (state) {
  return state.task
}

export default connect(mapPropToState) (Result)