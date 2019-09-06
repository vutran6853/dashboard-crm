import React from 'react'
import { connect } from 'react-redux'
import { Line, Bar } from 'react-chartjs-2'

function HouseUtitlesGrapic(props) {
  // console.log('props', props.grapic.userUtitesFilterData)
  // let str = props.grapic.userSelectType

  //// Each date will had total amount for all type
  //// display line for each date 

  const utitesTotalArray = props.grapic.userUtitesFilterData.map((value) => value.total)
  const utitesPaymentDate = props.grapic.userUtitesFilterData.map((value) => value.date)

  // const me = props.grapic.userUtitesData.filter(function (value, index) {
  //   // console.log(`value[${index}] =`, value)
  //   if (value.date.includes('2020')) {
  //     console.log(value)
  //   }
  // })

  const data =  {
    labels: utitesPaymentDate,
    datasets: [
      {
        label: 'Overall',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: utitesTotalArray
      }
    ]
  }

  // console.log(utitesTotalArray)
  // console.log(utitesPaymentDate)
  return (
    <div>
      <p>Overall included (Gas, Water, internet, electric)</p>
      <Line data={ data } />
      
    </div>
  )
}

const mapPropsToState = (state) => state

export default connect(mapPropsToState, {  })(HouseUtitlesGrapic)