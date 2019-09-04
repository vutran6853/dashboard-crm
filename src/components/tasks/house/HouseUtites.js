import React from 'react'
import { connect } from 'react-redux'
import { setUserSelectTypeAction, fetchSelectTypeAction } from '../../../duck/grapicReducer'
import handleCreateRangeOfYear from '.././../../helper/rangeDate'
import HouseUtitlesGrapic from './HouseUtitlesGrapic'

function HouseUtites(props) {
  // console.log(props.grapic)
  const range_date = handleCreateRangeOfYear()

  const displayTypeName = props.grapic.utitesLabel.map((value, index) => (
    <option value={ value } key={ index }>{ value }</option>
  ))

  const displayMonth = props.grapic.monthName.map((value) => (
    <option key={ value } >{ value }</option>
  ))

  const displayYear = range_date.map((value) => (
    <option key={ value } >{ value }</option>
  ))

  const handleSelectTypeName = (e) => {
    props.setUserSelectTypeAction(e.target.value)
    props.fetchSelectTypeAction(e.target.value)
    
  }

  const displayGripicType = props.grapic.userSelectType !== '---' ? <HouseUtitlesGrapic /> : 'false'

  // const displayGripic = 

  return (
    <React.Fragment>
      <div>
        House Utitles
        <select onChange={ handleSelectTypeName }>
          { displayTypeName }
        </select>

        <select>
          { displayMonth }
        </select>

        <select>
          {/* <option> */}
            { displayYear }
          {/* </option> */}
        </select>

      <div>
        { displayGripicType }
      </div>


      </div>
    </React.Fragment>
  )
}

const mapPropsToState = (state) => state

export default connect(mapPropsToState, { setUserSelectTypeAction, fetchSelectTypeAction })(HouseUtites)