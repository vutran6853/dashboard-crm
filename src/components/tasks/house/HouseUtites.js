import React from 'react'
import { connect } from 'react-redux'
import { 
  setUserSelectTypeAction, 
  fetchSelectTypeAction, 
  resetUserUtitesDataAction, 
  setUserSelectYearAction,
  filterUserUtitesDataAction } from '../../../duck/grapicReducer'
import handleCreateRangeOfYear from '.././../../helper/rangeDate'
import HouseUtitlesGrapic from './HouseUtitlesGrapic'

function HouseUtites(props) {
  // console.log(props.grapic)
  const range_date = handleCreateRangeOfYear()

  const displayTypeName = props.grapic.utitesLabel.map((value) => (
    <option value={ value } key={ value }>{ value }</option>
  ))

  const displayMonth = props.grapic.monthName.map((value) => (
    <option key={ value } >{ value }</option>
  ))

  const displayYear = range_date.map((value) => (
    <option key={ value } >{ value }</option>
  ))

  const handleSetSelectTypeName = (e) => {
    props.setUserSelectTypeAction(e.target.value)

    if (e.target.value === '---') {
      props.resetUserUtitesDataAction()
    }
    return null
  }

  const handleSetSelectYear = (e) => {
    console.log('e', e.target.value)
    props.setUserSelectYearAction(e.target.value)
  } 

  const handleFetchUserRequestData = () => {
    // console.log(props.grapic)
    if (props.grapic.userSelectType === 'overall' && props.grapic.userSelectYear === '---') {
      props.fetchSelectTypeAction()
    }

    if (props.grapic.userSelectType === '---') {
      props.resetUserUtitesDataAction()
    }

    if (props.grapic.userSelectType !== '---' && props.grapic.userSelectYear !== '---') {
      console.log('true')
      props.filterUserUtitesDataAction(props.grapic.userSelectYear)
    } else {
      console.log('false')
    }

    
    // console.log('e.target.value', passValue)
    // if (passValue !== '---') {
    //   console.log('there is something')
    //   props.fetchSelectTypeAction(passValue)
    // } else {
    //   console.log('there is nothing')
    // }
  }

  const shouldDisplayGripicType = props.grapic.userUtitesFilterData.length !== 0 ? <HouseUtitlesGrapic /> : 'false'

  // const displayGripic =

  return (
    <React.Fragment>
      <div>
        House Utitles
        <select onChange={ handleSetSelectTypeName }>
          { displayTypeName }
        </select>

        <select>
          { displayMonth }
        </select>

        <select onChange={ handleSetSelectYear } >
          {/* <option> */}
            { displayYear }
          {/* </option> */}
        </select>
      <button onClick={ handleFetchUserRequestData } >Filter</button>

      <div>
        { shouldDisplayGripicType }
      </div>


      </div>
    </React.Fragment>
  )
}

const mapPropsToState = (state) => state

export default connect(mapPropsToState, 
  { setUserSelectTypeAction, 
    fetchSelectTypeAction, 
    resetUserUtitesDataAction, 
    setUserSelectYearAction,
    filterUserUtitesDataAction })(HouseUtites)