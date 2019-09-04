import React from 'react'
import { connect } from 'react-redux'

function HouseUtitlesGrapic(props) {
  console.log('props', props.grapic.userUtitesData)
  let utites = props.grapic.userUtitesData.map((value, index) => {
    console.log(value)
  })
  return (
    <div>
      HouseUtitlesGrapic
    </div>
  )
}

const mapPropsToState = (state) => state

export default connect(mapPropsToState, {  })(HouseUtitlesGrapic)