import React from 'react'
import { connect } from 'react-redux'
import { 
  setUserSelectTypeAction, 
  fetchSelectTypeAction, 
  resetUserUtitesDataAction, 
  setUserSelectYearAction,
  filterUserUtitesDataAction,
  fetchSelectType2Action,
  setUserSelectGraphicTypeAction } from '../../../duck/grapicReducer'
import handleCreateRangeOfYear from '.././../../helper/rangeDate'
import HouseUtitlesGrapic from './HouseUtitlesGrapic'
import HouseUtitlesAllGrapic from './HouseUtitlesAllGrapic'
import './house.scss'

function HouseUtites(props) {
  // console.log(props.grapic)
  const range_date = handleCreateRangeOfYear()

  const displayTypeName = props.grapic.utitesLabel.map((value) => (
    <option value={ value } key={ value }>{ value }</option>
  ))

  const displayGrapicType = props.grapic.grapicType.map((value) => (
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
      props.fetchSelectType2Action()
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

  const handleSetSelectGrapicType = (e) => {
    // console.log('e', e.target.value)
    props.setUserSelectGraphicTypeAction(e.target.value)
  }

  const shouldDisplayGripicType = props.grapic.userUtitesFilterData.length !== 0 ? <HouseUtitlesGrapic /> : 'false'
  const shouldDisplayGripicType2 = props.grapic.userUtitesAllData.length !== 0 ? <HouseUtitlesAllGrapic /> : 'false2'
  
  //// CREATE TABLE VIEW FOR ALL UTITES DATE AS ANOTHER OPTION
  const shouldDisplayGripicType3 = props.grapic.userSelectGrapicType === 'Table' ? 'true for table' : 'false for table'
  // const displayGripic =

  return (
      <div className="house_utites__overall_form_container">
       <div>
        <select onChange={ handleSetSelectTypeName }>
            { displayTypeName }
          </select>

          <select onChange={ handleSetSelectGrapicType }>
            { displayGrapicType }
          </select>

          <select onChange={ handleSetSelectYear } >
            {/* <option> */}
              { displayYear }
            {/* </option> */}
          </select>
        <button onClick={ handleFetchUserRequestData } >Filter</button>
      </div>

      <div className="house_utites_graphic_overall_container">
        { shouldDisplayGripicType }
      </div>

      {/* <div className="house_utites_graphic_all_container"> */}
        { shouldDisplayGripicType2 }
      {/* </div> */}
      <dvi>
        { shouldDisplayGripicType3 }
      </dvi>
    </div>
  )
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, 
  { setUserSelectTypeAction, 
    fetchSelectTypeAction, 
    resetUserUtitesDataAction, 
    setUserSelectYearAction,
    filterUserUtitesDataAction,
    fetchSelectType2Action,
    setUserSelectGraphicTypeAction
  })
(HouseUtites)